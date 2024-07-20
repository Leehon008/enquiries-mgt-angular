import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainSidebarComponent } from './components/main-sidebar/main-sidebar.component';
import { ContentWrapperComponent } from './components/content-wrapper/content-wrapper.component';
import { ControlSidebarComponent } from './components/control-sidebar/control-sidebar.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { EnquiriesComponent } from './ui/enquiries/enquiries.component';
import { DashboardComponent } from './ui/dashboard/dashboard.component';
import { EnquiryService } from './services/apiService.service';
import { HttpClientModule } from '@angular/common/http';
import { EnquiryDetailsComponent } from './ui/enquiries/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    ContentWrapperComponent,
    ControlSidebarComponent,
    MainFooterComponent,
    EnquiriesComponent,
    DashboardComponent,
    EnquiryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EnquiryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
