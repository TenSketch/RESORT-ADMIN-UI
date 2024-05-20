import { NgModule } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterModule } from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor'; // Import AngularEditorModule


import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PreloginLayoutComponent } from './modules/layouts/prelogin-layout/prelogin-layout.component';
import { MainLayoutComponent } from './modules/layouts/main-layout/main-layout.component';
import { LoginComponent } from './auth/prelogin/login/login.component';
import { DashboardComponent } from './modules/postlogin/dashboard/dashboard.component';
import { AddGuestComponent } from './add-guest/add-guest.component';
import { ShowguestComponent } from './showguest/showguest.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ResortsComponent } from './resorts/resorts.component';
import { RoomComponent } from './room/room.component';
import { UpdateGuestComponent } from './update-guest/update-guest.component';
import { ViewguestComponent } from './viewguest/viewguest.component';
import { ViewcottageComponent } from './viewcottage/viewcottage.component';
import { AddcottageComponent } from './addcottage/addcottage.component';
import { ViewroomComponent } from './viewroom/viewroom.component';
import { ViewresortsComponent } from './viewresorts/viewresorts.component';
import { ViewreservationComponent } from './viewreservation/viewreservation.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MainLayoutComponent,
    PreloginLayoutComponent,
    AddGuestComponent,
    ShowguestComponent,
    ReservationComponent,
    ResortsComponent,
    RoomComponent,
    UpdateGuestComponent,
    ViewguestComponent,
    ViewcottageComponent,
    AddcottageComponent,
    ViewroomComponent,
    ViewresortsComponent,
    ViewreservationComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    SharedModule,
    AngularEditorModule


  ],
  exports: [SharedModule],

  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
