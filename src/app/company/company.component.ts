import {Component, OnInit} from '@angular/core';

import {CompanyService} from './company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  providers: [CompanyService]
})
export class CompanyComponent implements OnInit {
  private companies: Array<String>;



  constructor(private companyService: CompanyService) {
  }

  //get Company from backend
  //Create
  private newCompany;


  addCompany(){
  }

  getCompanies() {
    return this.companyService.get().then(companies => {
      for(let company in companies){
        this.companies.push(companies[company]);
      }

    });

  }

  ngOnInit() {
    this.getCompanies();
  }

}


