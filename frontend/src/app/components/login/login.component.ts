import { TokenService } from './../../services/token.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password: null
  }

  public error =  null;

  constructor(private auth: AuthService,
              private token: TokenService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // console.log(this.form);
    return this.auth.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )
  }

  handleResponse(data: any) {
    this.token.handle(data.access_token);
  }

  handleError(error: any) {
  this.error = error.error.error;
  }

}
