import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetEmailComponent } from './components/forget-email/forget-email.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  {path:'registration', component: RegistrationComponent},
  {path:'sign-in', component: SignInComponent},
  {path:'forget-email', component: ForgetEmailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
