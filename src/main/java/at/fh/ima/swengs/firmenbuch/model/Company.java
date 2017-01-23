package at.fh.ima.swengs.firmenbuch.model;


import javax.persistence.*;

@Entity
public class Company {


  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;

  @Column
  private String foundationDate;


  @Column
  String name;
  @Column
  String branch;
  @Column
  int employeeNumber;
  //Headquater Location





  @ManyToOne(targetEntity = Location.class)
  @JoinColumn(name = "locationID")
  private Location locationID;

  public String getFoundationDate() {
    return foundationDate;
  }

  public void setFoundationDate(String foundationDate) {
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

  public Location getLocationID() {
    return locationID;
  }
  //MirrorID
  public void setLocationID(Location locationID) {
    this.locationID = locationID;
  }

}
