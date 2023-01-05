import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PropertisComponent } from './propertis/propertis.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'}, //Redirect component Login-page & empty path
  {path:'login',component:LoginComponent },
  {path:'signup',component:SignupComponent },
  {path:'propertis',component:PropertisComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
