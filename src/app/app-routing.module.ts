import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { FilesUploadComponent } from './files-upload/files-upload.component';
import { LandingComponent } from './landing/landing.component';



const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'emplyee-detail', component: EmployeeDetailsComponent },
  { path: 'upload', component: FilesUploadComponent},
  { path: 'emplyeelist', component: EmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 100] // [x, y]
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
