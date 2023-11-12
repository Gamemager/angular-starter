import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/cors/service/api.service';

@Component({
  selector: 'app-acceder',
  templateUrl: './acceder.component.html',
  styleUrls: ['./acceder.component.css'],
})
export class AccederComponent implements OnInit {
  LoginForm = this.create_form();

  constructor(
    private formBuilder: FormBuilder,
    private ApiService: ApiService,
    private router: Router
  ) {}

  create_form() {
    return this.formBuilder.group({
      Usuario: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onLogin() {
    this.ApiService.login(this.LoginForm.value).subscribe(
      (data: any) => {
        console.log(data);
        sessionStorage.setItem('token', data.token);
        this.router.navigate(['/private/home']);
      },
      (error) => {
        alert(error.error.message);
        console.error(error);
      }
    );
  }
}
