import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {HttpClientModule} from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule, MatNavList} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu'


import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ForgetEmailComponent } from './components/forget-email/forget-email.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FundooLogoComponent } from './components/fundoo-logo/fundoo-logo.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateNotesComponent } from './components/create-notes/create-notes.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { DisplayNotesComponent } from './components/display-notes/display-notes.component';
import { IconsComponent } from './components/icons/icons.component';
import { AuthguardServiceService } from './services/authguardService/authguard-service.service';
import { ArchiveNotesComponent } from './components/archive-notes/archive-notes.component';
import { TrashNotesComponent } from './components/trash-notes/trash-notes.component';
import { UpdateNotesComponent } from './components/update-notes/update-notes.component';





@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SignInComponent,
    ForgetEmailComponent,
    PasswordResetComponent,
    FundooLogoComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    CreateNotesComponent,
    GetAllNotesComponent,
    DisplayNotesComponent,
    IconsComponent,
    ArchiveNotesComponent,
    TrashNotesComponent,
    UpdateNotesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule, 
    MatIconModule,
    FormsModule,
    MatMenuModule
  ],
  providers: [
    AuthguardServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
