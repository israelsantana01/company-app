import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  templateUrl: '../auth/auth.page.html',
  styleUrls: ['../auth/auth.page.scss']
})

// tslint:disable-next-line: component-class-suffix
export class AuthPage implements OnInit {

  log = faSignInAlt;

  form: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      password: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      })
    });
  }

  login() {
    if (this.form.invalid) {
      return;
    }

    this.authService.login(this.form.value);
    this.router.navigate(['/admin', 'companies']);
  }
}
