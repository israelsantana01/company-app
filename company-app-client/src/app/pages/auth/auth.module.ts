import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthPage } from './auth.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  {
    path: '',
    component: AuthPage
  }
];

@NgModule({
  declarations: [AuthPage],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule, FontAwesomeModule]
})

export class AuthModule {

}
