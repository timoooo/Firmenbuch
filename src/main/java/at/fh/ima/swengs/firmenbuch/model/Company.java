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
