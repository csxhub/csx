package csxdddocker.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Id;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class OrdersTransactionsDTO {

    @Id
    private Long trans_id;
    private LocalDateTime time;
    private BigDecimal price;
    private BigDecimal size;
    private Long stock_id;
    private String stock_code;
    private String stock_description;
    private Long buyer_order_id;
    private Long buyer_trader_id;
    private String buyer_trader_description;
    private Long seller_order_id;
    private Long seller_trader_id;
    private String seller_trader_description;
}
