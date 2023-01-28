package csxdddocker.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.ColumnResult;
import javax.persistence.Id;
import java.math.BigDecimal;
import java.time.LocalDateTime;

    @AllArgsConstructor
    @NoArgsConstructor
    @Getter
    @Setter
    public class ActiveStocksDTO  {

        @Id
        private Long as_id;
        private BigDecimal as_volume;
        private BigDecimal as_min;
        private BigDecimal as_max;
        private String as_stock_code;
        private String as_stock_description;

    }
