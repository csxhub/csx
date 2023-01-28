package csxdddocker.controller;

import csxdddocker.model.Order;
import csxdddocker.model.OrdersStocksTradersDTO;
import csxdddocker.model.OrdersTransactionsDTO;
import csxdddocker.service.OrderService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/csx/order")
@Slf4j
public class OrderController {

    @Autowired
    OrderService orderService;

    @GetMapping("/")
    public ResponseEntity<List<Order>> getAll() {
        try {
            List<Order> objList;
            objList = orderService.getAll();
            if (objList.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(objList, new HttpHeaders(), HttpStatus.OK);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.EXPECTATION_FAILED, e.getMessage(), e);
        }
    }

    @GetMapping("/ordersstockstraders")
    public ResponseEntity<List<OrdersStocksTradersDTO>> getListAll() {
        try {
            List<OrdersStocksTradersDTO> objList;
            objList = orderService.listOrdersStocksTraders();

            if (objList.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(objList, new HttpHeaders(), HttpStatus.OK);
        } catch (Exception e) {
            System.out.println("ERRR+++++++++++  "+e.getMessage());
            //return null
            throw new ResponseStatusException(HttpStatus.EXPECTATION_FAILED, e.getMessage(), e);
        }
    }

    @GetMapping("/orderstransactions")
    public ResponseEntity<List<OrdersTransactionsDTO>> getAllOrderTransactions() {
        try {
            List<OrdersTransactionsDTO> objList;
            objList = orderService.listOrdersTransactions();

            if (objList.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(objList, new HttpHeaders(), HttpStatus.OK);
        } catch (Exception e) {
            System.out.println("ERRR+++++++++++  "+e.getMessage());
            //return null
            throw new ResponseStatusException(HttpStatus.EXPECTATION_FAILED, e.getMessage(), e);
        }
    }

    @GetMapping("/ordersstockstradersbystockcode/{code}")
    public ResponseEntity<List<OrdersStocksTradersDTO>> getOrdersStocksTradersStockCode(@PathVariable("code") String code) {
        try {
            List<OrdersStocksTradersDTO> objList;
            objList = orderService.listOrdersStocksTradersByStockCode(code);
            if (objList.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(objList, new HttpHeaders(), HttpStatus.OK);
        } catch (Exception e) {
            System.out.println("ERRR+++++++++++  "+e.getMessage());
            //return null
            throw new ResponseStatusException(HttpStatus.EXPECTATION_FAILED, e.getMessage(), e);
        }
    }

    @GetMapping("/orderstransactions/{code}")
    public ResponseEntity<List<OrdersTransactionsDTO>> getAllOrderTransactionsByStockCode(@PathVariable("code") String code) {
        try {
            List<OrdersTransactionsDTO> objList;
            objList = orderService.listOrdersTransactionsByStockCode(code);

            if (objList.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(objList, new HttpHeaders(), HttpStatus.OK);
        } catch (Exception e) {
            System.out.println("ERRR+++++++++++  "+e.getMessage());
            //return null
            throw new ResponseStatusException(HttpStatus.EXPECTATION_FAILED, e.getMessage(), e);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> getById(@PathVariable("id") long id) {
        Order obj = orderService.getById(id);
        if (obj != null) {
            return new ResponseEntity<Order>(obj, new HttpHeaders(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/ordersbystock/{id}")
    public ResponseEntity<List<Order>> getOrdersActiveByStock(@PathVariable("id") long id) {
        try {
            List<Order> objList;
            objList = orderService.getAllActiveOrdersByStock(id);
            if (objList.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(objList, new HttpHeaders(), HttpStatus.OK);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.EXPECTATION_FAILED, e.getMessage(), e);
        }
    }



    @PostMapping("/")
    public ResponseEntity<Order> create(@RequestBody Order objIn) {
    log.info(objIn.getSide()+"---ID== "+"   DATEETTTTTTTTTTTTctrlll----"+objIn.getOrder_time());
        Order obj = orderService.create(objIn);
        if (obj != null) {
            return new ResponseEntity<>(obj, new HttpHeaders(), HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Order> update(@PathVariable(value = "id") Long id, @RequestBody Order objIn) {
        try {
            Order obj = orderService.update(id, objIn);
            if (obj != null) {
                return new ResponseEntity<>(obj, new HttpHeaders(), HttpStatus.CREATED);
            } else {
                return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
            }

        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> deleteById(@PathVariable("id") long id) {
        boolean resp = orderService.deleteById(id);
        if (resp == true) {
            return new ResponseEntity<>(true, new HttpHeaders(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(false, new HttpHeaders(), HttpStatus.NOT_FOUND);
        }
    }

}