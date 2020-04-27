import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent} from './sign-in/sign-in.component';
import { SsoIntegrateComponent } from './sso-integrate/sso-integrate.component';
import { AesEncryptComponent } from './aes-encrypt/aes-encrypt.component';
import { PersonalInsuranceComponent } from './personal-insurance/personal-insurance.component';
const routes: Routes = [
  { path:"sign-in", component:SignInComponent },
    { path:"sso-integrate", component:SsoIntegrateComponent },
    { path:"personal-insurance", component:PersonalInsuranceComponent },
    { path:"aes-encrypt", component:AesEncryptComponent },
    {
				path: '**',
				pathMatch: 'full',
				redirectTo: 'sign-in'
			}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
