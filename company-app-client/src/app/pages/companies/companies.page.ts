import { Component, OnInit } from '@angular/core';
import { CompaniesService } from 'src/app/services/companies.service';
import { Company } from 'src/app/models/company.model';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-companies',
  templateUrl: '../companies/companies.page.html',
  styleUrls: ['../companies/companies.page.scss']
})

// tslint:disable-next-line: component-class-suffix
export class CompanyPage implements OnInit {

  trash = faTrash;
  edit = faEdit;

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
