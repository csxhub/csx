package csxdddocker.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.type.LocalDateType;
import org.springframework.data.jpa.repository.Query;

import javax.persistence.*;
import java.math.BigDecimal;




@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tbl_stocks")
public class Stock {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "stock_id")
    private Long stockID;

    @Column(name = "stock_code")
    private String stockCode;

    @Column(name = "stock_description")
    private String stockDescription;

    public Stock(String stockCode, String stockDescripstion) {
        this.stockCode = stockCode;
        this.stockDescription = stockDescripstion;
    }
}
