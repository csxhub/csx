package csxdddocker.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import javax.sql.DataSource;

@Configuration
public class DataSourceConfig {
/*
    @Value("${spring.datasource}")
    public String dbDriver;

    @Value("${spring.datasource.url}")
    public String dbUrl;

    @Value("${db.username}")
    public String dbUserName;

    @Value("${db.password}")
    public String dbPassword;

*/
    @Bean("dataSource")
    public DataSource getConfig() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        //*
        //dataSource.setUrl("jdbc:postgresql://mb-eee-postgres/mbdb");
        //dataSource.setUsername("me");
        //dataSource.setPassword("sera");
        //dataSource.setUrl("jdbc:postgresql://localhost:5433/csx-d");
        dataSource.setUrl("jdbc:postgresql://csx-d-postgres/csx-d");
        dataSource.setUsername("csx-d");
        dataSource.setPassword("csx-d");

        return dataSource;
    }
}
