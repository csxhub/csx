package csxdddocker.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tbl_traders")
public class Trader {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "trader_id")
    private Long traderID;

    @Column(name = "trader_description")
    private String traderDescription;

    @Column(name = "trader_username")
    private String traderUsername;

    @Column(name = "trader_password")
    private String traderPassword;

    public Trader(String trader_description, String trader_username, String trader_password) {
        this.traderDescription = trader_description;
        this.traderUsername = trader_username;
        this.traderPassword=trader_password;
    }

}
