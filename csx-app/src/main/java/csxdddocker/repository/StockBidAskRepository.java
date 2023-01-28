package csxdddocker.repository;

import csxdddocker.model.Order;
import csxdddocker.model.StockBidAsk;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StockBidAskRepository extends JpaRepository<StockBidAsk, Long> {

}
