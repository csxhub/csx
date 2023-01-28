package csxdddocker.service;

import csxdddocker.constants.Action;
import csxdddocker.constants.Errors;
import csxdddocker.exception.CustomException;
import csxdddocker.model.Order;
import csxdddocker.model.Transaction;
import csxdddocker.repository.OrderRepository;
import csxdddocker.repository.TransactionRepository;
import csxdddocker.utilities.response.ProcessedOrderResponse;
import lombok.extern.slf4j.Slf4j;
///import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

@Service
@Slf4j
public class OrderProcessService {

    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private OrderService orderService;
    @Autowired
    private TransactionRepository transactionRepository;


    private static final String BUY = Action.BUY.toString();
    private static final String SELL = Action.SELL.toString();

    /* This function process incoming order based on the given side, i.e buy and sell. */

    public ProcessedOrderResponse processOrder(Order request) throws CustomException {

        ArrayList<Order> listOfOrders = new ArrayList<>();

        String side = request.getSide().toString();  //=== if nulll??????
        //*
        this.validateOrderRequest(request);
        //*
        switch (side) {
            case "BUY":
                ArrayList<Order> sellOrders = (ArrayList)orderRepository.getAllSellOrdersSortedByPriceAndActive(Action.SELL.toString());
                listOfOrders = sellOrders.isEmpty() ? new ArrayList<>() : this.getOrderMap(sellOrders, SELL);
                ProcessedOrderResponse buyOrderResponse = this.matchOrders(request, listOfOrders, SELL);
                return buyOrderResponse;

            case "SELL":
                ArrayList<Order> buyOrders = (ArrayList)orderRepository.getAllBuyOrdersSortedByPriceAndActive(Action.BUY.toString());
                listOfOrders = buyOrders.isEmpty() ? new ArrayList<>() : this.getOrderMap(buyOrders, BUY);
                ProcessedOrderResponse sellOrderResponse = this.matchOrders(request, listOfOrders, BUY);
                return sellOrderResponse;
            default:
                throw new CustomException(Errors.INVALID_SIDE, "400");
        }
    }

    /*  This function matches the incoming order with existing ones based on price-time priority matching. */
    private ProcessedOrderResponse matchOrders(Order request, ArrayList<Order> listOfSelectedOrders, String side) {
        //* to ensure incoming request that is already inactive is
        Order SavedOrder=orderService.getById(request.getOrder_id());
        request=SavedOrder;
        log.info(request.getOrder_id()+"&&&"+request.getIsactive()+"**"+SavedOrder.getOrder_id()+"**"+SavedOrder.getIsactive());


        List<Transaction> listOfTxns = new ArrayList<>();
        List<Transaction> listOfTxnToadd = new ArrayList<>();
        Order savedCompletedOrder = new Order();
        //*
        String action = request.getSide().toString().equalsIgnoreCase("BUY") ? "SELL" : "BUY";

        log.info("Rearraged contra side::::---" + side);
        listOfSelectedOrders.forEach(array -> log.info("Orders rearranged by Price====="+array.getPrice()+"---" + array.getOrder_id()));

        if (listOfSelectedOrders.isEmpty()) {
            Order orderToSave = new Order();
            orderToSave.setPrice(request.getPrice());
            orderToSave.setSide(request.getSide().toString().toUpperCase());          //Action.valueOf(request.getSide().toString().toUpperCase()));
            orderToSave.setSize(request.getSize());
            orderToSave.setStock_id(request.getStock_id());
            orderToSave.setTrader_id(request.getTrader_id());
            //orderToSave.setStock(request.getStock());
            //orderToSave.setTrader(request.getTrader());
            orderToSave.setIsactive(request.getIsactive());

           //** Order savedOrder = orderRepository.save(orderToSave);
            Order savedOrder=new Order();//= orderRepository.save(orderToSave);
            return new ProcessedOrderResponse(savedOrder, new ArrayList<>(), Boolean.FALSE);
        }
        else {
            if (side.equalsIgnoreCase(SELL)) {
                for (Order ord : listOfSelectedOrders) {
                   if(request.getIsactive()==true) {
                        if(request.getStock_id()==ord.getStock_id()) { //* same stock_is is traded
                        //* size: if request order is greater than this matching order
                        if (request.getSize().compareTo(BigDecimal.ZERO) > 0 && request.getSize().compareTo(ord.getSize()) > 0) {
                            //*This if inOrder > 0 and if it is > order in list
                            BigDecimal previousOrdSize = ord.getSize();
                            request.setSize(request.getSize().subtract(ord.getSize()));
                            ord.setIsactive(Boolean.FALSE);
                            ord.setSize(BigDecimal.ZERO);
                            //*
                            log.info("INFZZZZZ==== " + ord.getPrice() + "--" + ord.getSize() + "**" + ord.getOrder_id());
                            this.orderService.update(ord.getOrder_id(), ord);
                            //*
                            if (request.getSize().compareTo(BigDecimal.ZERO) == 0) {
                                request.setIsactive(Boolean.FALSE);
                            }
                            //  Order requestOrd=request;
                            log.info("INFOOOOOO==== " + request.getPrice() + "--" + request.getSize() + "**" + request.getOrder_id());
                            this.orderService.update(request.getOrder_id(), request);
                            //*
                            listOfTxnToadd = getTransactionsList(ord, request.getSide().toString(), previousOrdSize, ord.getPrice(), request.getOrder_id());///ord.getOrder_id());//===776L);
                            listOfTxns.addAll(listOfTxnToadd);
                            //*
                            this.transactionRepository.saveAll(listOfTxnToadd);
                        }
                        //* size: if request order if less than or equal to this matching order
                        else if (request.getSize().compareTo(BigDecimal.ZERO) > 0
                                && (request.getSize().compareTo(ord.getSize()) < 0) || request.getSize().compareTo(ord.getSize()) == 0) {
                            log.info("ELSLSEEEEEEEEEE");
                            ord.setSize(ord.getSize().subtract(request.getSize()));
                            if (ord.getSize().compareTo(BigDecimal.ZERO) == 0) {
                                ord.setIsactive(false);
                            }
                            //*
                            //////this.orderRepository.save(ord);
                            this.orderService.update(ord.getOrder_id(), ord);

                            //*
                            listOfTxnToadd = getTransactionsList(ord, request.getSide().toString(), request.getSize(), ord.getPrice(), request.getOrder_id());//ord.getOrder_id());//=== 777L);
                            listOfTxns.addAll(listOfTxnToadd);
                            //*
                            this.transactionRepository.saveAll(listOfTxnToadd);
                            //*
                            Order requestOrd = request;
                            request.setSize(BigDecimal.ZERO);
                            request.setIsactive(Boolean.FALSE);
                            //this.orderRepository.save(requestOrd);
                            this.orderService.update(request.getOrder_id(), request);
                        }
                        //* if request order sis
                          /*  if (request.getSize().compareTo(BigDecimal.ZERO) == 0){
                                Order completedOrder = new Order(originalReq.getTime(), originalReq.getSize(), originalReq.getPrice(), Action.BUY,originalReq.getTrader_id(), Boolean.FALSE);
                                savedCompletedOrder = orderRepository.save(completedOrder);
                            }
                           */
                       }
                    }
                }
                ProcessedOrderResponse response = new ProcessedOrderResponse(savedCompletedOrder, listOfTxns, Boolean.TRUE);
                return response;
            }
            else if(side.equalsIgnoreCase(BUY)) {
                for (Order ord : listOfSelectedOrders) {
                    if(request.getIsactive()==true) {
                       if(request.getStock_id()==ord.getStock_id()) { //* same stock_is is traded
                        if (request.getSize().compareTo(BigDecimal.ZERO) > 0 && request.getSize().compareTo(ord.getSize()) > 0) {
                            //*This if inOrder > 0 and if it is > order in list
                            log.info("IFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF");
                            BigDecimal previousOrdSize = ord.getSize();
                            request.setSize(request.getSize().subtract(ord.getSize()));
                            ord.setIsactive(Boolean.FALSE);
                            ord.setSize(BigDecimal.ZERO);
                            //*
                            log.info("INFZZZZZ BBB==== " + ord.getPrice() + "--" + ord.getSize() + "**" + ord.getOrder_id());
                            this.orderService.update(ord.getOrder_id(), ord);
                            //*
                            if (request.getSize().compareTo(BigDecimal.ZERO) == 0) {
                                request.setIsactive(Boolean.FALSE);
                            }
                            //  Order requestOrd=request;
                            log.info("INFOOOOOO BBBB==== " + request.getPrice() + "--" + request.getSize() + "**" + request.getOrder_id());
                            this.orderService.update(request.getOrder_id(), request);
                            //*
                            listOfTxnToadd = getTransactionsList(ord, request.getSide().toString(), previousOrdSize, ord.getPrice(), request.getOrder_id()); /// 776L);
                            listOfTxns.addAll(listOfTxnToadd);
                            //*
                            this.transactionRepository.saveAll(listOfTxnToadd);
                        } else if (request.getSize().compareTo(BigDecimal.ZERO) > 0 && request.getSize().compareTo(ord.getSize()) < 0) {
                            log.info("ELSLSEEEEEEEEEE BBBB");

                            ord.setSize(ord.getSize().subtract(request.getSize()));
                            if (ord.getSize().compareTo(BigDecimal.ZERO) == 0) {
                                ord.setIsactive(false);
                            }
                            //*
                            //////this.orderRepository.save(ord);
                            this.orderService.update(ord.getOrder_id(), ord);

                            //*
                            listOfTxnToadd = getTransactionsList(ord, request.getSide().toString(), request.getSize(), ord.getPrice(), request.getOrder_id()); /// 777L);
                            listOfTxns.addAll(listOfTxnToadd);
                            //*
                            this.transactionRepository.saveAll(listOfTxnToadd);
                            //*
                            Order requestOrd = request;
                            request.setSize(BigDecimal.ZERO);
                            request.setIsactive(Boolean.FALSE);
                            //this.orderRepository.save(requestOrd);
                            this.orderService.update(request.getOrder_id(), request);
                        }
                            /*
                            else if (request.getSize().compareTo(BigDecimal.ZERO) == 0) {
                                Order completedOrder = new Order(originalReq.getTime(), originalReq.getSize(), originalReq.getPrice(), Action.BUY, originalReq.getTrader_id(), Boolean.FALSE);
                                savedCompletedOrder = orderRepository.save(completedOrder);
                            }
                            */
                       }
                    }
                }
            }
            else{}
            //*
            ProcessedOrderResponse response = new ProcessedOrderResponse(savedCompletedOrder, listOfTxns, Boolean.TRUE);
            return response;

        }
    }

    /* This function generates a txn object to provide information on the orders consumed  while processing/matching any incoming order. */
    private List<Transaction> getTransactionsList(Order or,String requestOrderSide,BigDecimal sizeTraded,BigDecimal priceTraded, Long requestOrderID) {

        List<Transaction> listOfTxns = new ArrayList<>();
        Transaction txn = new Transaction();
        if(requestOrderSide.equalsIgnoreCase("BUY")){
            txn.setBuyerID(requestOrderID);
            txn.setSellerID(or.getOrder_id());
        }
        else if(requestOrderSide.equalsIgnoreCase("SELL"))
        {
            txn.setBuyerID(or.getOrder_id());
            txn.setSellerID(requestOrderID);
        }
        else{}
        txn.setPrice(priceTraded);
        txn.setOrder_time(or.getOrder_time());
        txn.setSize(sizeTraded);
        txn.setStockID(or.getStock_id());
        //txn.setStockID(or.getStock_id().getStockID());
        listOfTxns.add(txn);
        return listOfTxns;
    }

    /* This function creates a multimap for existing orders which has sorted set based on time in the values for each key. */
    private ArrayList<Order> getOrderMap(ArrayList<Order> sellOrders, String side) throws CustomException {
        //===Multimap<BigDecimal, Order> mapOfOrders = ArrayListMultimap.create();

    System.out.println("S ORRDDDRR=="+sellOrders);
        System.out.println("S DDD=="+side);
        ArrayList<Order> listOfOrders=new ArrayList<>();
        switch (side) {
            case "SELL":
                System.out.println("SSSEllllllllll");
                Comparator<Order> compareById =
                        (Order o1, Order o2) -> o1.getPrice().compareTo( o2.getPrice() );
                Collections.sort(sellOrders, compareById); //* This in descending order
                //* Collections.sort(sellOrders, compareById.reversed()); This in descending order
              return sellOrders;
            case "BUY":
                System.out.println("BUYYYyyyyyyyyyyyyy");
                Comparator<Order> compareById2 =
                        (Order o1, Order o2) -> o1.getPrice().compareTo( o2.getPrice() );
                Collections.sort(sellOrders, compareById2); //* This in descending order
                Collections.sort(sellOrders, compareById2.reversed()); //* This in descending order
                return sellOrders;
            default:
                throw new CustomException(Errors.INVALID_SIDE, "400");
        }

    }

    /* A simple validation wrapper for the add order request.  */
    private void validateOrderRequest(Order req) throws CustomException {
        //** REvue THIS     if (StringUtils.isBlank(req.getSide().toString()) || (req.getSide().toString().equalsIgnoreCase("BUY")
        if ((req.getSide().toString().equalsIgnoreCase("BUY")
                && req.getSide().toString().equalsIgnoreCase("SELL"))) {
            throw new CustomException(Errors.INVALID_SIDE, "400");
        } else if (req.getPrice() == null) {
            throw new CustomException(Errors.INVALID_PRICE, "400");
        } else if (req.getSize() == null) {
            throw new CustomException(Errors.INVALID_SIZE, "400");
        } else if (req.getOrder_time() == null) {
            throw new CustomException(Errors.INVALID_TIME, "400");
        }
    }

    /* */
    public List<Order> getAllOrders(Boolean active ) {
        List<Order> orders = new ArrayList<>();
        orders = orderRepository.findByisactive(active);
        return orders;
    }
}
