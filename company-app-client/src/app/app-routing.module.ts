import { AuthGuard } from './pages/auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/admin/companies',
    pathMatch: 'full'
  },
  {
    path: 'admin/companies',
    loadChildren: '../app/pages/companies/companies.module#CompanyModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: '../app/pages/auth/auth.module#AuthModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
