package csxdddocker.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import csxdddocker.exception.CustomException;
import csxdddocker.model.Order;
import csxdddocker.service.OrderProcessService;
import csxdddocker.utilities.response.ApiResponse;
import csxdddocker.utilities.response.ApiResponseSuccess;
import csxdddocker.utilities.response.ProcessedOrderResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import java.io.UnsupportedEncodingException;
import java.security.GeneralSecurityException;

import static org.springframework.web.bind.annotation.RequestMethod.POST;

@Controller
@RequestMapping(value = "/csx/order")
@Slf4j
public class OrderBookController {

    @Autowired
    private OrderProcessService bookService;

    @RequestMapping(method = POST, value = "/process", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ApiResponse> processOrder(@RequestBody Order addOrderRequest,
                                                HttpServletRequest request) throws JsonProcessingException,
            CustomException, UnsupportedEncodingException, GeneralSecurityException {
        ProcessedOrderResponse response = bookService.processOrder(addOrderRequest);
        return new ResponseEntity<>(new ApiResponseSuccess(response, "Order processed successfully."), HttpStatus.OK);
    }

    /*
    @RequestMapping(method = POST, value = "/order", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ApiResponse> addOrder(@RequestBody Order addOrderRequest,
                                                HttpServletRequest request) throws JsonProcessingException,
            CustomException, UnsupportedEncodingException, GeneralSecurityException {
        ProcessedOrderResponse response = bookService.processOrder(addOrderRequest);
        return new ResponseEntity<>(new ApiResponseSuccess(response, "Order processed successfully."), HttpStatus.OK);
    }

    @RequestMapping(method = GET, value = "/order", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ApiResponse>fetchAllOrders(@RequestParam(name = "active", required = false, defaultValue = "true") Boolean active,
                                                             HttpServletRequest request) throws JsonProcessingException,
            CustomException, UnsupportedEncodingException, GeneralSecurityException {

        List<Order> response = bookService.getAllOrders(active);
        return new ResponseEntity<>(new ApiResponseSuccess(response, "Order Book fetched successfully."), HttpStatus.OK);
    }
    */
}
