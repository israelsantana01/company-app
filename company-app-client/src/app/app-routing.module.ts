import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/admin/companies',
    pathMatch: 'full'
  },
  {
    path: 'admin/companies',
    loadChildren: '../app/pages/companies/companies.module#CompanyModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
