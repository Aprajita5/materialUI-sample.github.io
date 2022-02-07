import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilesUploadComponent } from './files-upload/files-upload.component';
import { MatSliderModule } from '@angular/material/slider';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { MaterialModule } from './material/material.module';
import { EmployeeService } from './shared/employee.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import { DepartmentService } from './shared/department.service';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import {MatTableModule} from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './page-layout/layout/layout.component';
import { FooterComponent } from './page-layout/footer/footer.component';
import { HeaderComponent } from './page-layout/header/header.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    FilesUploadComponent,
    EmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    LayoutComponent,
    FooterComponent,
    HeaderComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    MatTableModule,
    FormsModule,
    RouterModule
  ],
  providers: [EmployeeService, DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
