package csxdddocker.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Id;
import java.math.BigDecimal;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class StockBidAskDTO {

    @Id
    private Long no;
    private BigDecimal price;
    private BigDecimal size;
    private Long count;

}

