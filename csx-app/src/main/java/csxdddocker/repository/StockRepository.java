package csxdddocker.repository;


import csxdddocker.model.Stock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface StockRepository extends JpaRepository<Stock, Long> {

    @Query(value="SELECT stc FROM Stock stc WHERE stc.stockCode = :stockCode")
    Optional<Stock> findStockByCode(String stockCode);



}
