import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { FilesUploadComponent } from './files-upload/files-upload.component';



const routes: Routes = [
  { path: '*', redirectTo: '' },
  // {
  //   path: 'restaurant', loadChildren: () => import('./modules/restaurant/restaurant.module').then(m => m.RestaurantModule),
  //   canActivate: [RedirectionGuard, ValidateLdaGuard]
  // },
  { path: 'upload', component: FilesUploadComponent},
];

@NgModule({
  exports: [RouterModule]
})
export class AppRoutingModule { }
