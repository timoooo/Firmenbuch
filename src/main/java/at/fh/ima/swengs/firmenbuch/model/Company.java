package at.fh.ima.swengs.firmenbuch.model;


import at.fh.ima.swengs.firmenbuch.util.JsonDateDeserializer;
import at.fh.ima.swengs.firmenbuch.util.JsonDateSerializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;

import java.util.*;

@Entity
public class Company {

  @JsonDeserialize(using = JsonDateDeserializer.class)
  @JsonSerialize(using = JsonDateSerializer.class)
  @Temporal(TemporalType.DATE)
  Date foundationDate;


  //@Autowired
  //CompanyRepository companyRepository;


  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;

  @Column
  String name;
  @Column
  String branch;
  @Column
  int employeeNumber;
  //Headquater Location
  @Column
  String hqlocation;

  @ManyToOne(targetEntity = Location.class)
  private Location location;

  @Transient
  @Version
  private long version;


  @Transient
  private int firstRun = 0;

  public Company() {
  }
  public void addCompany(Company company) {

   // companyRepository.save(company);

  }
  /*
  private Random randomGenerator;
  public String randHQLocation(){

    ArrayList<String> locations = new ArrayList<>();
    locations.add("Graz");
    locations.add("Wien");
    locations.add("Klagenfurt");
    locations.add("Salzburg");
     int index = randomGenerator.nextInt(locations.size());
    return locations.get(index);
  }
  */
  public void initData() {
    //Generate 10 Companies


    for (int i = 1; i < 11; i++) {
      Company company = new Company();
      company.setName("Firma " + i);
      company.setBranch("IT:" + i);
      company.setEmployeeNumber(i * 10);
      company.setHqlocation("Graz");
      Date today = new Date();
      company.setFoundationDate(today);

      //companyRepository.save(company);
    }


  }

  public Date getFoundationDate() {
    return foundationDate;
  }

  public void setFoundationDate(Date foundationDate) {
    this.foundationDate = foundationDate;
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

  public String getHqlocation() {
    return hqlocation;
  }

  public void setHqlocation(String hqlocation) {
    this.hqlocation = hqlocation;
  }

  public Location getLocation() {
    return location;
  }

  public void setLocation(Location location) {
    this.location = location;
  }

}
