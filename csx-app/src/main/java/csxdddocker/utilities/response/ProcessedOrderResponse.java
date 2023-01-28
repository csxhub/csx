package csxdddocker.utilities.response;


import csxdddocker.model.Order;
import csxdddocker.model.Transaction;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class ProcessedOrderResponse {
    Order orderBookEntity;
    List<Transaction> txns;
    Boolean orderMatched;
}
