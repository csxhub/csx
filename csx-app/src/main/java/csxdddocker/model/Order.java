package csxdddocker.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import csxdddocker.constants.Action;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.type.LocalDateTimeType;
import org.hibernate.type.LocalDateType;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Date;
import java.sql.Time;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;


@SqlResultSetMapping(
        name="OrdersStocksTradersResult",
        classes = @ConstructorResult(
                targetClass = csxdddocker.model.OrdersStocksTradersDTO.class,
                columns = {
                        @ColumnResult(name = "order_id", type = Long.class),
                        @ColumnResult(name = "order_time", type= LocalDateTimeType.class), //type = Timestamp.class),     //localDateTimeType.class),
                        @ColumnResult(name = "size", type = BigDecimal.class),
                        @ColumnResult(name = "price", type = BigDecimal.class),
                        @ColumnResult(name = "side", type = String.class),
                        @ColumnResult(name = "isactive", type = Boolean.class),
                        @ColumnResult(name = "stock_id", type = Long.class),
                        @ColumnResult(name = "stock_code", type = String.class),
                        @ColumnResult(name = "stock_description", type = String.class),
                        @ColumnResult(name = "trader_id", type = Long.class),
                        @ColumnResult(name = "trader_description", type = String.class),
                        @ColumnResult(name = "trader_username", type = String.class),
                        @ColumnResult(name = "trader_password", type = String.class)
                }
        )

)
@SqlResultSetMapping(
        name="OrdersTransactionsResult",
        classes = @ConstructorResult(
                targetClass = csxdddocker.model.OrdersTransactionsDTO.class,
                columns = {
                        @ColumnResult(name = "trans_id", type = Long.class),
                        @ColumnResult(name = "time", type = LocalDateTimeType.class),
                        @ColumnResult(name = "price", type = BigDecimal.class),
                        @ColumnResult(name = "size", type = BigDecimal.class),
                        @ColumnResult(name = "stock_id", type = Long.class),
                        @ColumnResult(name = "stock_code", type = String.class),
                        @ColumnResult(name = "stock_description", type = String.class),
                        @ColumnResult(name = "buyer_order_id", type = Long.class),
                        @ColumnResult(name = "buyer_trader_id", type = Long.class),
                        @ColumnResult(name = "buyer_trader_description", type = String.class),
                        @ColumnResult(name = "seller_order_id", type = Long.class),
                        @ColumnResult(name = "seller_trader_id", type = Long.class),
                        @ColumnResult(name = "seller_trader_description", type = String.class)
                }
        )

)

@NamedNativeQuery(  //
        name="NamedQueryOrdersStocksTraders",
        query="SELECT tbl_orders.order_id,tbl_orders.order_time,tbl_orders.size,tbl_orders.price,tbl_orders.side,tbl_orders.isactive " +
                " ,tbl_stocks.stock_id,tbl_stocks.stock_code,tbl_stocks.stock_description " +
                " ,tbl_traders.trader_id,tbl_traders.trader_description, tbl_traders.trader_username, tbl_traders.trader_password   " +
                " FROM tbl_stocks INNER JOIN tbl_orders ON tbl_orders.stock_id=tbl_stocks.stock_id INNER JOIN tbl_traders ON tbl_orders.trader_id=tbl_traders.trader_id  ",
        resultSetMapping = "OrdersStocksTradersResult"
)

@NamedNativeQuery(
        name="NamedQueryOrdersStocksTradersByStockCode",
        query="SELECT tbl_orders.order_id,tbl_orders.order_time,tbl_orders.size,tbl_orders.price,tbl_orders.side,tbl_orders.isactive " +
                " ,tbl_stocks.stock_id,tbl_stocks.stock_code,tbl_stocks.stock_description " +
                " ,tbl_traders.trader_id,tbl_traders.trader_description, tbl_traders.trader_username, tbl_traders.trader_password   " +
                " FROM tbl_stocks INNER JOIN tbl_orders ON tbl_orders.stock_id=tbl_stocks.stock_id INNER JOIN tbl_traders ON tbl_orders.trader_id=tbl_traders.trader_id  " +
                " WHERE tbl_stocks.stock_code=?",
        resultSetMapping = "OrdersStocksTradersResult"
)

@NamedNativeQuery(
        name="NamedQueryOrdersTransactions",
        query="SELECT trans.trans_id,trans.time,trans.price,trans.size" +
               "   ,stock.stock_id,stock.stock_code,stock.stock_description" +
               "   ,buyer_order.order_id AS buyer_order_id,buyer_order.trader_id" +
               "   ,buyer.trader_id AS buyer_trader_id,buyer.trader_description AS buyer_trader_description" +
               "   ,seller_order.order_id AS seller_order_id,seller_order.trader_id" +
               "   ,seller.trader_id AS seller_trader_id,seller.trader_description AS seller_trader_description" +
               "   FROM tbl_transactions trans INNER JOIN tbl_stocks stock ON trans.stock_id=stock.stock_id" +
               "   INNER JOIN  tbl_orders buyer_order ON trans.buyer_id=buyer_order.order_id" +
               "   INNER JOIN  tbl_traders buyer ON buyer_order.trader_id=buyer.trader_id" +
               "  INNER JOIN  tbl_transactions transb ON transb.buyer_id=buyer_order.order_id" +
               "  INNER JOIN  tbl_orders seller_order ON transb.seller_id=seller_order.order_id" +
               "  INNER JOIN  tbl_traders seller ON transb.seller_id=seller.trader_id",
         resultSetMapping = "OrdersTransactionsResult"
)

@NamedNativeQuery(
        name="NamedQueryOrdersTransactionsByStockCode",
        query="SELECT trans.trans_id,trans.time,trans.price,trans.size" +
                "   ,stock.stock_id,stock.stock_code,stock.stock_description" +
                "   ,buyer_order.order_id AS buyer_order_id,buyer_order.trader_id" +
                "   ,buyer.trader_id AS buyer_trader_id,buyer.trader_description AS buyer_trader_description" +
                "   ,seller_order.order_id AS seller_order_id,seller_order.trader_id" +
                "   ,seller.trader_id AS seller_trader_id,seller.trader_description AS seller_trader_description" +
                "   FROM tbl_transactions trans INNER JOIN tbl_stocks stock ON trans.stock_id=stock.stock_id" +
                "   INNER JOIN  tbl_orders buyer_order ON trans.buyer_id=buyer_order.order_id" +
                "   INNER JOIN  tbl_traders buyer ON buyer_order.trader_id=buyer.trader_id" +
                "  INNER JOIN  tbl_transactions transb ON transb.buyer_id=buyer_order.order_id" +
                "  INNER JOIN  tbl_orders seller_order ON transb.seller_id=seller_order.order_id" +
                "  INNER JOIN  tbl_traders seller ON transb.seller_id=seller.trader_id" +
                " WHERE stock.stock_code=?",
        resultSetMapping = "OrdersTransactionsResult"
)

@NamedNativeQuery(
        name="NamedQueryOrdersTransactionsFiveActive",
        query="SELECT trans.trans_id,trans.time,trans.price,trans.size" +
                "   ,stock.stock_id,stock.stock_code,stock.stock_description" +
                "   ,buyer_order.order_id AS buyer_order_id,buyer_order.trader_id" +
                "   ,buyer.trader_id AS buyer_trader_id,buyer.trader_description AS buyer_trader_description" +
                "   ,seller_order.order_id AS seller_order_id,seller_order.trader_id" +
                "   ,seller.trader_id AS seller_trader_id,seller.trader_description AS seller_trader_description" +
                "   FROM tbl_transactions trans INNER JOIN tbl_stocks stock ON trans.stock_id=stock.stock_id" +
                "   INNER JOIN  tbl_orders buyer_order ON trans.buyer_id=buyer_order.order_id" +
                "   INNER JOIN  tbl_traders buyer ON buyer_order.trader_id=buyer.trader_id" +
                "  INNER JOIN  tbl_transactions transb ON transb.buyer_id=buyer_order.order_id" +
                "  INNER JOIN  tbl_orders seller_order ON transb.seller_id=seller_order.order_id" +
                "  INNER JOIN  tbl_traders seller ON transb.seller_id=seller.trader_id" +
                " ORDER BY trans.size",
        resultSetMapping = "OrdersTransactionsResult"
)

/*
SELECT sum(trans.size),sum(trans.price)
                   ,stock.stock_id,stock.stock_code,stock.stock_description
                   FROM tbl_transactions trans INNER JOIN tbl_stocks stock ON trans.stock_id=stock.stock_id
                   INNER JOIN  tbl_orders buyer_order ON trans.buyer_id=buyer_order.order_id
                   INNER JOIN  tbl_traders buyer ON buyer_order.trader_id=buyer.trader_id
                  INNER JOIN  tbl_transactions transb ON transb.buyer_id=buyer_order.order_id
                  INNER JOIN  tbl_orders seller_order ON transb.seller_id=seller_order.order_id
                  INNER JOIN  tbl_traders seller ON transb.seller_id=seller.trader_id
				  GROUP BY (stock.stock_id)
            		Order by sum(trans.size) asc
 */

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tbl_orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id")
    private Long order_id;

    //@JsonFormat(shape = JsonFormat.Shape.STRING,pattern = "yyyy/MM/dd")
    //@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    @Column(name = "order_time")
    private Timestamp order_time;

    @Column(name = "size")
    private BigDecimal size;

    @Column(name = "price")
    private BigDecimal price;

    @Column(name = "stock_id")
    private Long stock_id;

    @Column(name = "trader_id")
    private Long trader_id;

    /*@Enumerated(EnumType.STRING)
    @Column(name="side")
    private Action side = Action.BUY;
    */

    @Column(name="side")
    private String side;    // = Action.BUY;

    @Column(name = "isactive")
    private Boolean isactive = Boolean.TRUE;

    //
    public Order(Timestamp order_time, BigDecimal size, BigDecimal price, String side, Long stockID, Long traderID, Boolean isactive){
         this.order_time = order_time;
        this.size = size;
        this.price = price;
        this.side = side;
        this.isactive = isactive;
        this.stock_id=stockID;
        this.trader_id=traderID;

    }

}
