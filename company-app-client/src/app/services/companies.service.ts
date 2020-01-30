import { Injectable, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company.model';

@Injectable({
  providedIn: 'root'
})

export class CompaniesService  {


  private baseUrl = 'http://localhost:8080/companies';

  constructor(private http: HttpClient) {

  }

  fetchCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.baseUrl);
  }

  postCompany(value: any): Observable<Company> {
    return this.http.post<Company>(this.baseUrl, value);
  }
}
