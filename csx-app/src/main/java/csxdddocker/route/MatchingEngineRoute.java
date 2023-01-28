package csxdddocker.route;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import csxdddocker.config.DataSourceConfig;
import csxdddocker.model.Order;
import csxdddocker.service.OrderProcessService;
import lombok.extern.slf4j.Slf4j;
import org.apache.camel.Exchange;
import org.apache.camel.Processor;
import org.apache.camel.builder.RouteBuilder;
import org.apache.camel.component.sql.SqlComponent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.sql.Date;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

//import org.json.simple.JSONObject;
//@Service


@Component
@Slf4j
    public class MatchingEngineRoute extends RouteBuilder {

        @Autowired
        DataSourceConfig dataSourceConfig;
        @Autowired
        private OrderProcessService orderProcessService;

    Order mapOrder;

    @Bean
        public SqlComponent sql(){//DataSource dataSource) {
            SqlComponent sql = new SqlComponent();
            sql.setDataSource(dataSourceConfig.getConfig());
            return sql;
        }

        @Override
        public void configure() throws Exception {
        log.info("DSDSDSDSDS=====================SCH555===  "+dataSourceConfig.getConfig().getConnection());

            from("timer:selectit?period=50000")
                    .to("sql:select * from tbl_orders where isactive=true")
                    .process(new Processor() {
                        public void process(Exchange xchg) throws Exception {
                            ArrayList<Map<String, Object>> dataList = (ArrayList<Map<String, Object>>) xchg.getIn().getBody();
                            List<Order> orders = new ArrayList<Order>();
                            //*
                            System.out.println(">>> "+dataList);
                            //*
                            for (Map<String, Object> data : dataList) {
                                /* This mapper doesnt work with LocalDate
                                ObjectMapper mapper = new ObjectMapper();
                                mapper.findAndRegisterModules();    //***
                                Map<String, Object> map = mapper.convertValue(data, new TypeReference<Map<String, Object>>() {});
                                //mapper.registerModule(new JavaTimeModule()); //**
                                System.out.println("GFOOFFFPOOOOOOFFFFFFOOOOOO 11111111"+data);

                                Boolean bb=(Boolean) data.get("isactive");
                                Long ll=(Long) data.get("order_id");
                                System.out.println(bb+"   FFPOOOOOOFFFFFFOOOOOO 11111111"+ll);
                                Date dt=(Date)data.get("order_time");
                                System.out.println(dt+"   HGHG");
                                mapper.findAndRegisterModules();  //**
                                System.out.println("G222OOFFFPOOOOOOFFFFFFOOOOOO 2222");
                                mapOrder = mapper.convertValue(map, Order.class);
                                System.out.println("QQQQQQQQQQ11==="+mapOrder.getOrder_time()+"<<----"+mapOrder.getPrice()+"---"+mapOrder.getOrder_id()+"---"+mapOrder.getSide());
                                orders.add(mapOrder);
                                //*
                                Order ord=new Order();
                                ord.setOrder_id(mapOrder.getOrder_id());
                                ord.setSize(mapOrder.getSize());
                                ord.setPrice(mapOrder.getPrice());
                                ord.setOrder_time(mapOrder.getOrder_time());
                                ord.setSide(mapOrder.getSide());
                                ord.setStock_id(mapOrder.getStock_id());
                                ord.setTrader_id(mapOrder.getTrader_id());
                                ////ord.(mapOrder.getStock());
                                ////rd.setTrader(mapOrder.getTrader());
                                */

                                Order ord=new Order();
                                ord.setOrder_id((Long) data.get("order_id"));
                                ord.setSize((BigDecimal) data.get("size"));
                                ord.setPrice((BigDecimal) data.get("price"));
                                ord.setOrder_time((Timestamp) data.get("order_time"));//.toLocalDateTime());
                                ord.setSide((String) data.get("side"));
                                ord.setStock_id((Long) data.get("stock_id"));
                                ord.setTrader_id((Long) data.get("trader_id"));
                                ord.setIsactive((Boolean) data.get("isactive"));

                                orders.add(ord);

                               if(ord!=null) {
                                   orderProcessService.processOrder(ord);
                               }
                            }
                            orders.forEach(array -> log.info("RR ===== "+array.getPrice()+"---"+array.getSize()));
                            xchg.getIn().setBody(orders);
                        }
                    })
                    .convertBodyTo(String.class)
                    .log("BOYDddyy---- ${body}");
        }
    }

