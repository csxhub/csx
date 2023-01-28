package csxdddocker.repository;

import csxdddocker.constants.Action;
import csxdddocker.model.Order;
import csxdddocker.model.OrdersStocksTradersDTO;
import csxdddocker.model.OrdersTransactionsDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

    @Query("Select ord from Order ord where ord.side = :side and ord.isactive = true order by ord.price asc")
    List<Order> getAllSellOrdersSortedByPriceAndActive(@Param("side") String side);

    @Query("Select ord from Order ord where ord.side = :side and ord.isactive = true order by ord.price desc")
    List<Order> getAllBuyOrdersSortedByPriceAndActive(@Param("side") String side);

 //==   List<Order> findByIsActive(Boolean is_active);
 List<Order> findByisactive(Boolean isactive);

    //=@Query("Select ord from Order ord where ord.isactive = true and ord.stock_id = :stockID")
    @Query("Select ord from Order ord where ord.isactive = true and ord.stock_id = :stockID")
    List<Order> getAllActiveOrdersByStock(Long stockID);

    /* THIS worked without DTO
    @Query(value="SELECT tbl_orders.order_id,tbl_orders.time,tbl_orders.size,tbl_orders.price,tbl_orders.side,tbl_orders.isactive,tbl_orders.stock_id  AS ord_stock_id,tbl_orders.trader_id AS ord_trader_id" +
            " ,tbl_stocks.stock_id,tbl_stocks.stock_code,tbl_stocks.stock_description " +
            " ,tbl_traders.trader_id,tbl_traders.trader_description, tbl_traders.trader_username, tbl_traders.trader_password   " +
            " FROM tbl_stocks INNER JOIN tbl_orders ON tbl_orders.stock_id=tbl_stocks.stock_id INNER JOIN tbl_traders ON tbl_orders.trader_id=tbl_traders.trader_id   ", nativeQuery = true)
    public List<Object> listOrdersStocksTraders();
*/
    @Query(name = "NamedQueryOrdersStocksTraders", nativeQuery = true)
    List<OrdersStocksTradersDTO> listOrdersStocksTraders();

    @Query(name = "NamedQueryOrdersTransactions", nativeQuery = true)
    List<OrdersTransactionsDTO> listOrdersTransactions();

    @Query(name = "NamedQueryOrdersTransactionsByStockCode", nativeQuery = true)
    List<OrdersTransactionsDTO> listOrdersTransactionsByStockCode(String stockCode);

    @Query(name = "NamedQueryOrdersStocksTradersByStockCode", nativeQuery = true)
    List<OrdersStocksTradersDTO> listOrdersStocksTradersByStockCode(String stockCode);






}
