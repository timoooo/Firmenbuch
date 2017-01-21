package at.fh.ima.swengs.firmenbuch.controller;

import at.fh.ima.swengs.firmenbuch.model.CompanyRepository;
import at.fh.ima.swengs.firmenbuch.model.Company;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by Timo on 21.01.2017.
 */


@RestController
@RequestMapping("/companies")
public class CompanyController {

  @Autowired
  CompanyRepository companyRepository;

  @CrossOrigin
  @RequestMapping("/read")
  public List<Company> getAllCompanies() {
    List<Company> companies = companyRepository.findAll();
    return companies;
  }
  //das selbe für CRUD Operationen


}
