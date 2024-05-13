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


 {path:'',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
