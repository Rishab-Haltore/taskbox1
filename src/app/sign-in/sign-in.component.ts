import { Component, OnInit } from '@angular/core';
import { Router ,  NavigationEnd } from '@angular/router';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatFormFieldModule,MatInputModule } from 'src/node_modules/@angular/material';
import { FormControl, Validators, FormGroup ,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent{

  login: FormGroup;
constructor(private fb: FormBuilder,private router:Router){
  this.login= fb.group({
    name: ["", Validators.required],
    pass: ["", Validators.required]

  });

}


formOneSubmit(){
console.log(this.login.value);
  if(this.login.value.name=="login" && this.login.value.pass=="login"){
  if(this.login.valid){
    this.router.navigate(['sso-integrate']);
  }
}
}
}
