import { Router } from '@angular/router';
import { CompaniesService } from 'src/app/services/companies.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { faTimesCircle, faPlus } from '@fortawesome/free-solid-svg-icons'

@Component({
  templateUrl: '../companies-form/companies-form.page.html',
  styleUrls: ['../companies-form/companies-form.page.scss']
})

// tslint:disable-next-line: component-class-suffix
export class CompanyFormPage implements OnInit {

  cancel = faTimesCircle;
  plus = faPlus;

  form: FormGroup;
  value: any;

  constructor(private companiesService: CompaniesService, private router: Router) {}

  ngOnInit() {
    // tslint:disable-next-line: no-unused-expression
    this.form = new FormGroup ({
      registeredName: new FormControl (null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(6)]
      }),
      taxPayerRegistration: new FormControl (null, {
        updateOn: 'change',
        // tslint:disable-next-line: max-line-length
        validators: [Validators.required, Validators.minLength(14), Validators.pattern('^(0|[1-9][0-9]*)$')]
      }),
      stateSubscription: new FormControl (null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(9), Validators.pattern('^(0|[1-9][0-9]*)$')]
      }),
      tradingName: new FormControl (null, {
        updateOn: 'change',
        validators: [Validators.required]
      })
    });
  }

  addCompany(value: any) {
    this.companiesService.postCompany(this.form.value).subscribe(comps => {
      this.value = comps;
      this.router.navigate(['/admin', 'companies']);
    });
  }
}
