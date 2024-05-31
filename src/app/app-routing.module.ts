import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ LoginComponent } from './login/login.component';
import { SturegistrationComponent } from './sturegistration/sturegistration.component';
import { PaymentComponent } from './payment/payment.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

 {path:"", pathMatch:"full", redirectTo:"/home"},
 {path:"home", component:HomeComponent},
  {path: "login", component:LoginComponent},
  {path:"sturegistration", component:SturegistrationComponent},
  {path:"payment", component:PaymentComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
