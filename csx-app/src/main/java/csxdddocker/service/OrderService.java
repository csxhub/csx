package csxdddocker.service;

import csxdddocker.model.Order;
import csxdddocker.model.OrdersStocksTradersDTO;
import csxdddocker.model.OrdersTransactionsDTO;
import csxdddocker.repository.OrderRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class OrderService {

    @Autowired
    OrderRepository orderRepository;

    public List<Order> getAll(){
        List<Order> objList=orderRepository.findAll();
        if(objList.size()>0) {
            return objList;
        }
        else {
            return new ArrayList<Order>();
        }
    }

    public Order getById(Long id) {
        Optional<Order> obj=orderRepository.findById(id);
        if(obj.isPresent()) {
            return obj.get();
        }
        else {
            return null;
        }
    }

    public Order create(Order objIn) {
  log.info(" DATEETTTTTTTTTTTTTTTTTTTT srvc----"+objIn.getOrder_time());
        Order newObj=orderRepository.save(objIn);
        return newObj;
    }

    public Order update(Long id, Order objIn) {
        if(id != null) {
            Optional<Order> obj=orderRepository.findById(id);
            if(obj.isPresent()) {
                Order newObj=obj.get();
                newObj.setSide(objIn.getSide());
                newObj.setOrder_time(objIn.getOrder_time());
                newObj.setPrice(objIn.getPrice());
                newObj.setSize(objIn.getSize());
                newObj.setIsactive(objIn.getIsactive());
                newObj.setTrader_id(objIn.getTrader_id());
                newObj.setTrader_id(objIn.getTrader_id());
                //newObj.setTrader(objIn.getTrader());
                //newObj.setTrader(objIn.getTrader());
                newObj=orderRepository.save( newObj);
                return newObj;
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    }

    public Boolean deleteById(Long id) {
        Optional<Order>obj=orderRepository.findById(id);
        if(obj.isPresent()) {
            orderRepository.deleteById(id);
            return true;
        }
        else {
            return false;
        }
    }

    //*
    public List<Order> getAllActiveOrdersByStock(Long stockID){
        List<Order> objList=orderRepository.getAllActiveOrdersByStock(stockID);
        if(objList.size()>0) {
            return objList;
        }
        else {
            return new ArrayList<Order>();
        }
    }

    //*
    public List<OrdersStocksTradersDTO> listOrdersStocksTraders(){
        List<OrdersStocksTradersDTO> objList=orderRepository.listOrdersStocksTraders();
        if(objList.size()>0) {
            return objList;
        }
        else {
            return new ArrayList<OrdersStocksTradersDTO>();
        }
    }

    public List<OrdersTransactionsDTO> listOrdersTransactions(){
        List<OrdersTransactionsDTO> objList=orderRepository.listOrdersTransactions();
        if(objList.size()>0) {
            return objList;
        }
        else {
            return new ArrayList<OrdersTransactionsDTO>();
        }
    }

    public List<OrdersTransactionsDTO> listOrdersTransactionsByStockCode(String code){
        List<OrdersTransactionsDTO> objList=orderRepository.listOrdersTransactionsByStockCode(code);
        if(objList.size()>0) {
            return objList;
        }
        else {
            return new ArrayList<OrdersTransactionsDTO>();
        }
    }

    public List<OrdersStocksTradersDTO> listOrdersStocksTradersByStockCode(String code){
        List<OrdersStocksTradersDTO> objList=orderRepository.listOrdersStocksTradersByStockCode(code);
        if(objList.size()>0) {
            return objList;
        }
        else {
            return new ArrayList<OrdersStocksTradersDTO>();
        }
    }



}
