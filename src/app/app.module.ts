import { BrowserModule } from '@angular/platform-browser';
import { NgModule , Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import {
  MatInputModule,
  MatSelectModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatMenuModule,
  MatCardModule,
  MatButtonModule,
  MatCheckboxModule, 
  MatProgressBarModule,
  MatIconModule
} from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SsoIntegrateComponent } from './sso-integrate/sso-integrate.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AesEncryptComponent } from './aes-encrypt/aes-encrypt.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { CardComponent } from './card/card.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PersonalInsuranceComponent } from './personal-insurance/personal-insurance.component';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    SignInComponent,
     // NgXPageScrollModule,
    SsoIntegrateComponent,
    

     AesEncryptComponent,
    

     CardComponent,
    

     SignUpComponent,
    

     PersonalInsuranceComponent
  ],
  exports: [

      MatFormFieldModule,
      MatInputModule,
    MatToolbarModule,
       MatMenuModule,
       MatCardModule,
       MatSelectModule,
       MatButtonModule,
       MatIconModule

],
  imports: [

    FormsModule,
    MatFormFieldModule,
      NgxPageScrollModule,
      NgxPageScrollCoreModule,
      MatInputModule,
    MatToolbarModule,
    MatCheckboxModule ,
    MatProgressBarModule,
    
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    BrowserModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    NgxPageScrollCoreModule.forRoot({duration: 2500}),

    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
