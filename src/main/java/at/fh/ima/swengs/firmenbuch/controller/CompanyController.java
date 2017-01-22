package at.fh.ima.swengs.firmenbuch.controller;

import at.fh.ima.swengs.firmenbuch.model.CompanyRepository;
import at.fh.ima.swengs.firmenbuch.model.Company;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.EntityManagerFactory;
import java.util.ArrayList;
import java.util.Date;


/**
 * Created by Timo on 21.01.2017.
 */

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/companies")
public class CompanyController {

  @Autowired
  CompanyRepository companyRepository;

    //On first Run write Data to DB
  public void addCompanyToDB(Company company) {
    companyRepository.save(company);
  }

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
      companyRepository.save(company);
    }


  }
   private int firstRun = 0;

  @GetMapping("/list")
  public ArrayList<Company> getAllCompanies() {
    firstRun = 1;

    if(firstRun==0){
      initData();
      System.out.print("initiating db    creating Datasets");
    }



    ArrayList<Company> companies = companyRepository.findAll();

    return companies;
  }
  //das selbe für CRUD Operationen


}
