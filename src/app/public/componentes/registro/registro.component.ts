import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/app/cors/service/api.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [],
})
export class RegistroComponent implements OnInit {
  registerForm: FormGroup = this.create_form();

  constructor(
    private formBuilder: FormBuilder,
    private ApiService: ApiService
  ) {}

  create_form() {
    return (this.registerForm = this.formBuilder.group({
      Full_name: ['', Validators.required],
      dni: ['', Validators.required],
      DOB: ['', Validators.required],
      Usuario: ['', Validators.required],
      Password: ['', Validators.required],
      Tipo_usuario: ['', Validators.required],
      terminos_y_condiciones: [false, Validators.requiredTrue],
    }));
  }

  onSubmit() {
    this.ApiService.create_user(this.registerForm.value).subscribe(
      (data) => {
        console.log(data);
        this.registerForm.reset();
        alert('Usuario creado correctamente');
      },
      (error) => {
        console.error(error);
        alert(error.error.message);
      }
    );
  }

  ngOnInit() {}
}
