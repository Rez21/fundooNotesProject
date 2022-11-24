import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetEmailComponent } from './components/forget-email/forget-email.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { AuthenticationGuard } from './authentication.guard';
import { TrashNotesComponent } from './components/trash-notes/trash-notes.component';
import { ArchiveNotesComponent } from './components/archive-notes/archive-notes.component';


const routes: Routes = [
 
  // {path:'', component: RegistrationComponent},
  {path:'registration', component: RegistrationComponent},
  {path:'sign-in', component: SignInComponent},
  {path:'forget-email', component: ForgetEmailComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'password-reset', component: PasswordResetComponent},
  {path:'', redirectTo:"/sign-in",pathMatch:'full'},
  {path:'dashboard', component:DashboardComponent,canActivate:[AuthenticationGuard],
      children: [{path:'notes',component: GetAllNotesComponent},
                 {path:'trash-notes',component: TrashNotesComponent},
                 {path:'archive-notes',component: ArchiveNotesComponent}]     
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
