import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/postlogin/dashboard/dashboard.component';
import { LoginComponent } from './auth/prelogin/login/login.component';
import { AddGuestComponent } from './add-guest/add-guest.component';
import { RoomComponent } from './room/room.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ResortsComponent } from './resorts/resorts.component';
import { ShowguestComponent } from './showguest/showguest.component';
import { UpdateGuestComponent } from './update-guest/update-guest.component';
import { ViewguestComponent } from './viewguest/viewguest.component';
import { AddcottageComponent } from './addcottage/addcottage.component';
import { ViewcottageComponent } from './viewcottage/viewcottage.component';
import { ViewroomComponent } from './viewroom/viewroom.component';
import { ViewresortsComponent } from './viewresorts/viewresorts.component';
import { ViewreservationComponent } from './viewreservation/viewreservation.component';


const routes: Routes = [
{path:'dashboard', component:DashboardComponent}, 
{path:'login',component:LoginComponent},
{path:'addguest',component:AddGuestComponent},
{path:'viewguest',component:ShowguestComponent},
{path:'viewguestdetails/:id',component:ViewguestComponent},
{path:'updateguest/:id',component:UpdateGuestComponent},
{path:'addroom',component:RoomComponent},
{path:'addreservation',component:ReservationComponent},
{path:'addresorts',component:ResortsComponent},
{path:'addcottage',component:AddcottageComponent},
{path:'viewcottage',component:ViewcottageComponent},
{path:'viewroom',component:ViewroomComponent},
{path:'viewresorts',component:ViewresortsComponent},
{path:'viewreservations',component:ViewreservationComponent},


 {path:'',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
