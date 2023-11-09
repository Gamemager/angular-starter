import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-acceder',
  templateUrl: './acceder.component.html',
  styleUrls: ['./acceder.component.css']
})
export class AccederComponent implements OnInit{

  LoginForm = new FormGroup({
    user : new FormControl('',Validators.required),
    password : new FormControl('', Validators.required)}
  )

  constructor(){
    
  }

  ngOnInit(): void {

  }
  
  onLogin(form: any){
    console.log(form)
  }
}
