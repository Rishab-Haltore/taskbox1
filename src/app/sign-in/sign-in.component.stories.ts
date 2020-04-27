import { storiesOf, moduleMetadata } from '@storybook/angular';
import { SignInComponent } from './sign-in.component';
import { Welcome,Button } from '@storybook/angular/demo';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { FormControl, Validators, FormGroup ,FormBuilder } from '@angular/forms';
import { NgModule } from '@angular/core';

// @NgModule({
//     imports:[Validators , FormGroup , FormBuilder],
//     declarations:[SignInComponent],
//     providers:[SignInComponent]
    
// })

storiesOf('Aes Encrypt',module).addDecorator(
    moduleMetadata({
        
        imports: [ Validators , FormBuilder , FormGroup],
        declarations:[SignInComponent],
        providers:[SignInComponent]
        
    }),

)
.add('default' , () => {
    return {

        template:'<app-sign-in></app-sign-in>',
        props:{

        }

    };

});


