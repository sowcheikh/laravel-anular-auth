import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // console.log(this.form);
    return this.http.post('http://localhost:8000/api/signup', this.form).subscribe(
      data => console.log(data),
      error => this.handleError(error)
    )
  }

  handleError(error: any) {
  this.error = error.error.errors;
  }

}
