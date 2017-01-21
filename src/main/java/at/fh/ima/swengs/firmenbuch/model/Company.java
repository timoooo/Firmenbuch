package at.fh.ima.swengs.firmenbuch.model;


import at.fh.ima.swengs.firmenbuch.util.JsonDateDeserializer;
import at.fh.ima.swengs.firmenbuch.util.JsonDateSerializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;
import java.lang.*;
import java.lang.reflect.Array;
import java.util.*;

@Entity
public class Company {

  @Autowired
  CompanyRepository companyRepository;

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
  //Headquater Location
  private String hqlocation;

  private Random randomGenerator;

  @ManyToOne(targetEntity = Location.class)
  private Location location;

  @Version
  private long version;


  public Company() {
    initData();
  }

  public void addCompany(Company company) {
    companyRepository.save(company);

  }

  public String randHQLocation(){

    ArrayList<java.lang.String> locations = new ArrayList<>();
    locations.add("Graz");
    locations.add("Wien");
    locations.add("Klagenfurt");
    locations.add("Salzburg");
     int index = randomGenerator.nextInt(locations.size());
    return locations.get(index);
  }

  public void initData() {
    //Generate 10 Companies


    for (int i = 1; i < 11; i++) {
      Company company = new Company();
      company.setName("Firma " + i);
      company.setBranch("IT:" + i);
      company.setEmployeeNumber(i * 10);
      company.setHqlocation(randHQLocation());
      company.setVersion(0 + i);
      Date today = new Date();
      company.setFoundationDate(today);

      companyRepository.save(company);
    }


  }




  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

   /* public ArrayList<String> getLocations() {
        return locations;
    }

  private void setLocations(ArrayList<java.lang.String> locations) {
  }*/

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
  public java.lang.String  getHqlocation() {
    return hqlocation;
  }

  public void setHqlocation(java.lang.String  hqlocation) {
    this.hqlocation = hqlocation;
  }

  public Location getLocation(){
    return location;
  }

  public void setLocation(Location location){
    this.location = location;
  }
}
