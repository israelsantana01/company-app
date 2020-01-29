import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { CompanyPage } from './companies.page';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: CompanyPage
  }
]

@NgModule({
  declarations: [
    CompanyPage
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class CompanyModule {}
