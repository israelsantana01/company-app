import { NgModule } from '@angular/core';
import { CompanyFormPage } from './companies-form.page';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  {
    path: '',
    component: CompanyFormPage
  }
];

@NgModule({
  declarations: [CompanyFormPage],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})

export class CompanyFormModule { }
