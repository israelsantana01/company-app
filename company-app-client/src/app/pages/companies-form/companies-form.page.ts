import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  templateUrl: '../companies-form/companies-form.page.html',
  styleUrls: ['../companies-form/companies-form.page.scss']
})

// tslint:disable-next-line: component-class-suffix
export class CompanyFormPage implements OnInit {

  form: FormGroup;

  constructor() {}

  ngOnInit() {
    // tslint:disable-next-line: no-unused-expression
    this.form = new FormGroup ({
      taxPayerRegistration: new FormControl (null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      registeredName: new FormControl (null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      stateSubscription: new FormControl (null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      tradingName: new FormControl (null, {
        updateOn: 'change',
        validators: [Validators.required]
      })
    });
  }
}
