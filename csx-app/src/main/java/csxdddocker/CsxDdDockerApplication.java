package csxdddocker;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import csxdddocker.model.Order;
import csxdddocker.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

@SpringBootApplication
public class CsxDdDockerApplication implements CommandLineRunner {

    @Autowired
    OrderRepository orderRepository;

    public static void main(String[] args) {
        SpringApplication.run(CsxDdDockerApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        /*
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
        Date date = dateFormat.parse("2020-10-10 10:10:10");
        long time = date.getTime();
        this.orderRepository.save(new Order(new Timestamp(time), new BigDecimal(20.0), new BigDecimal(10.0), "BUY", 1L, 1L, true));
        dateFormat.parse("2020-10-10 10:10:10");
        time = date.getTime();
        this.orderRepository.save(new Order(new Timestamp(time), new BigDecimal(20.0), new BigDecimal(10.0), "BUY", 1L, 1L, true));
        */
    }
}
