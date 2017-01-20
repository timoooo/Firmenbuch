package at.fh.ima.swengs.firmenbuch.model;

import javax.persistence.*;
import java.util.List;

@Entity

public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String address;

    private int employee;

    @ManyToMany
    private List<Company> companies;

    @Version
    private long version;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public List<Company> getCompanies() {
        return companies;
    }

    public void setCompanies(List<Company> companies) {
        this.companies = companies;
    }

}