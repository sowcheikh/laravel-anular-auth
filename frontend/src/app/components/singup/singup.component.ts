import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  public form = {
    name: null,
    email: null,
    password: null,
    password_confirmation: null
  }

  public error: any = [];

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // console.log(this.form);
    return this.auth.register(this.form).subscribe(
      data => console.log(data),
      error => this.handleError(error)
    )
  }

  handleError(error: any) {
  this.error = error.error.errors;
  }

}
