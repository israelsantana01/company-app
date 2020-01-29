import { Component, OnInit } from "@angular/core";
import { CompaniesService } from 'src/app/services/companies.service';
import { Company } from 'src/app/models/company.model';

@Component({
  selector: 'app-companies',
  templateUrl: '../companies/companies.page.html',
  styleUrls: ['../companies/companies.page.scss']
})

// tslint:disable-next-line: component-class-suffix
export class CompanyPage implements OnInit {

  companies: Company[];

  constructor(private companiesService: CompaniesService) {}

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.companiesService.fetchCompanies().subscribe(comps => {
      this.companies = comps;
    });
  }
}
