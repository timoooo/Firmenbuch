import {Injectable} from '@angular/core';


//getCompany

let company;


@Injectable()
export class CompanyService {
  constructor() {
  }

  get() {
    return new Promise(resolve => resolve(company));
  }
}
