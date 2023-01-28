package csxdddocker.model;


import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Date;
import java.sql.Time;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tbl_transactions")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "trans_id")
    private Long transID;

    @Column(name = "stock_id")
    private Long stockID;

   // @JsonFormat(pattern = "yyyy/MM/dd")
    @Column(name = "time")
    private Timestamp order_time;

    @Column(name = "size")
    private BigDecimal size;

    @Column(name = "price")
    private BigDecimal price;

    @Column(name = "seller_id")
    private Long sellerID;

    @Column(name = "buyer_id")
    private Long buyerID;

    public Transaction(Long stockID,Timestamp order_time, BigDecimal size, BigDecimal price, Long sellerID, Long buyerID){
        this.stockID=stockID;
        this.order_time = order_time;
        this.size = size;
        this.price = price;
        this.sellerID=sellerID;
        this.buyerID=buyerID;
    }

}
