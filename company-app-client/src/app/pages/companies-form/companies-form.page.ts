import { Company } from './../../models/company.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CompaniesService } from 'src/app/services/companies.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { faTimesCircle, faPlus, faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: '../companies-form/companies-form.page.html',
  styleUrls: ['../companies-form/companies-form.page.scss']
})

// tslint:disable-next-line: component-class-suffix
export class CompanyFormPage implements OnInit {

  cancel = faTimesCircle;
  plus = faPlus;
  save = faSave;

  form: FormGroup;
  company: Company;
  editMode = false;

  constructor(
    private companiesService: CompaniesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // tslint:disable-next-line: no-unused-expression
    this.route.paramMap.subscribe(paramMap => {
      if (paramMap.has('id')) {
        this.editMode = true;

        this.companiesService.getComapany(+paramMap.get('id')).subscribe(comp => {
          this.company = comp;
          this.initForm();
        });
      } else {
        this.initForm();
      }
    });
  }

  initForm() {
    this.form = new FormGroup({
      registeredName: new FormControl(this.company ? this.company.registeredName : null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(6)]
      }),
      taxPayerRegistration: new FormControl(this.company ? this.company.taxPayerRegistration : null, {
        updateOn: 'change',
        // tslint:disable-next-line: max-line-length
        validators: [Validators.required, Validators.minLength(14), Validators.pattern('^(0|[1-9][0-9]*)$')]
      }),
      stateSubscription: new FormControl( this.company ? this.company.stateSubscription : null , {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(9), Validators.pattern('^(0|[1-9][0-9]*)$')]
      }),
      tradingName: new FormControl(this.company ? this.company.tradingName : null, {
        updateOn: 'change',
        validators: [Validators.required]
      })
    });
  }

  addCompany(company: Company) {
    if (this.form.invalid) {
      return;
    }

    const value: Company = {
      id: this.company ? this.company.id : null,
      ...this.form.value
    };

    this.companiesService.postCompany(value).subscribe(() => {
      this.router.navigate(['/admin', 'companies']);
    });
  }
}
