package at.fh.ima.swengs.firmenbuch.model;


import at.fh.ima.swengs.firmenbuch.util.JsonDateDeserializer;
import at.fh.ima.swengs.firmenbuch.util.JsonDateSerializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity

public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @JsonDeserialize(using = JsonDateDeserializer.class)
    @JsonSerialize(using = JsonDateSerializer.class)
    @Temporal(TemporalType.DATE)
    protected Date foundationDate;

    private String name;

    private String branch;

    private int employeeNumber;

    @ManyToMany
    private List<Location> locations;

    @Version
    private long version;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public List<Location> getLocation() {
        return locations;
    }

    public void setLocations(List<Location> locations) {
        this.locations = locations;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBranch() {
        return branch;
    }

    public void setBranch(String branch) {
        this.branch = branch;
    }

    public int getEmployeeNumber() {
        return employeeNumber;
    }

    public void setEmployeeNumber(int employeeNumber) {
        this.employeeNumber = employeeNumber;
    }
}