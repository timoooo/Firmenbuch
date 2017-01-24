package at.fh.ima.swengs.firmenbuch.model;

import javax.persistence.*;
import java.util.List;

@Entity

public class Location {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;

  @Column
  private String name;
  @Column
  private String land = "Austria";


  @OneToMany(mappedBy = "locationID")
  private List<Company> companies;



  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getLand() {
    return land;
  }

  public void setLand(String land) {
    this.land = land;
  }

  public List<Company> getCompanies() {
    return companies;
  }

  public void setCompanies(List<Company> companies) {
    this.companies = companies;
  }

}
