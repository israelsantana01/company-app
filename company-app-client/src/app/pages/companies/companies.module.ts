import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CompanyPage } from './companies.page';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: CompanyPage
  },
  {
    path: 'new-company',
    loadChildren: '../companies-form/companies-form.module#CompanyFormModule'
  }
];

@NgModule({
  declarations: [CompanyPage],
  imports: [CommonModule, RouterModule.forChild(routes)]
})

export class CompanyModule {}
