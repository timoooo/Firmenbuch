package at.fh.ima.swengs.firmenbuch.model;


import at.fh.ima.swengs.firmenbuch.util.JsonDateDeserializer;
import at.fh.ima.swengs.firmenbuch.util.JsonDateSerializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import javax.persistence.*;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
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

    private java.lang.String name;

    private java.lang.String branch;

    private int employeeNumber;

    @ManyToMany
    private ArrayList<String> locations;

    @Version
    private long version;

    public Company() {
      initData();
  }

    public void addCompany(){

    }

    public void initData(){
      //Generate 10 Companies

      ArrayList<java.lang.String> locations = new ArrayList<>();
      locations.add("Graz");
      locations.add("Wien");
      locations.add("Klagenfurt");
      locations.add("Salzburg");
      for(int i=1;i<11;i++){
        Company company = new Company();
        company.setName("Firma "+i);
        company.setBranch("IT:"+i);
        company.setEmployeeNumber(i*10);
        company.setLocations(locations);
        company.setVersion(0+i);
        Date today = new Date();
        company.setFoundationDate(today);
        
      }




    }




  public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public ArrayList<String> getLocations() {
        return locations;
    }

  private void setLocations(ArrayList<java.lang.String> locations) {
  }

    public java.lang.String getName() {
        return name;
    }

    public void setName(java.lang.String name) {
        this.name = name;
    }

    public java.lang.String getBranch() {
        return branch;
    }

    public void setBranch(java.lang.String branch) {
        this.branch = branch;
    }

    public int getEmployeeNumber() {
        return employeeNumber;
    }

    public void setEmployeeNumber(int employeeNumber) {
        this.employeeNumber = employeeNumber;
    }

  public Date getFoundationDate() {
    return foundationDate;
  }

  public void setFoundationDate(Date foundationDate) {
    this.foundationDate = foundationDate;
  }

  public long getVersion() {
    return version;
  }

  public void setVersion(long version) {
    this.version = version;
  }
}
