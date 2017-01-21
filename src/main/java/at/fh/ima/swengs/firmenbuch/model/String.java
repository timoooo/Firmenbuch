package at.fh.ima.swengs.firmenbuch.model;

import javax.persistence.*;
import java.util.List;

@Entity

public class String {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private java.lang.String name;

    private java.lang.String address;

    private int employees;

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

    public java.lang.String getAddress() {
        return address;
    }

    public void setAddress(java.lang.String address) {
        this.address = address;
    }

    public int getEmployees() {
        return employees;
    }

    public void setEmployees(int employees) {
        this.employees = employees;
    }

    public java.lang.String getName() {
        return name;
    }

    public void setName(java.lang.String name) {
        this.name = name;
    }
}
