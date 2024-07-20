import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnquiriesComponent } from './ui/enquiries/enquiries.component';
import { DashboardComponent } from './ui/dashboard/dashboard.component';
import { EnquiryDetailsComponent } from './ui/enquiries/details/details.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'enquiries',
    component: EnquiriesComponent,
  },
  {
    path: 'enquiries/detail/:id',
    component: EnquiryDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
