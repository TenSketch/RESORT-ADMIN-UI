import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

let navbar: string;
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }
  isSidebarActive: boolean = false;
  isPageContent75Width: boolean = false;
  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;
    this.isPageContent75Width = !this.isPageContent75Width;

  }
  constructor(private router: Router, private renderer: Renderer2) { }

  ngOnInit() {
    // const header = document.getElementsByClassName('navbar');
    // this.renderer.setStyle(navbar, 'width', '80%')
  }


  isActive = false;
  goToDashboard() {
    this.router.navigate(['/dashboard']);
    this.isActive = !this.isActive;
  }
  goToViewResorts() {
    // this.router.navigate(['/customer-records']);
    this.router.navigate(['/viewresorts']);

    console.log("add view page")

  }
  goToAddResort(){
    console.log("add resort page")
    this.router.navigate(["./addresorts"])
  }

  goToViewCottages() {
    console.log("View cottages page");
    this.router.navigate(["./viewcottage"])

    // Add your logic to navigate to the view cottages page
  }

  goToAddCottage() {
    console.log("Add cottage page");
    this.router.navigate(["./addcottage"])
    // Add your logic to navigate to the add cottage page
  }

  goToViewRooms() {
    console.log("View rooms page");
    this.router.navigate(['/viewroom']);

    // Add your logic to navigate to the view rooms page
  }

  goToAddRoom() {
    console.log("Add room page");
    this.router.navigate(["./addroom"])
    // Add your logic to navigate to the add room page
  }

  goToViewGuests() {
    console.log("View guests page");
    this.router.navigate(["./viewguest"])

    // Add your logic to navigate to the view guests page
  }

  goToAddGuest() {
    console.log("Add guest page");
    // Add your logic to navigate to the add guest page
this.router.navigate(["./addguest"])
// this.isActive = !this.isActive;

  }
// 
  goToAddReservation() {
    console.log("Add reservation page");
    this.router.navigate(["./addreservation"])
    // Add your logic to navigate to the add reservation page

  }

  goToViewReservations() {
    console.log("View reservations page");
    this.router.navigate(['/viewreservations']);

    // Add your logic to navigate to the view reservations page
  }
  goToCallerDetails() {
    console.log("add resort page")
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
  isRead: boolean = false;
  toggleRead(){
    console.log(this.isRead);
    this.isRead = !this.isRead;
  }
  isClearMsg: boolean = false;
  clearMsg() {
    this.isClearMsg = !this.isClearMsg;
    console.log(" notification msg cleared = ", this.isClearMsg);
  }
  isNotificationDropdownActive:boolean = false;
  toggleNotificationList(){
    this.isNotificationDropdownActive = !this.isNotificationDropdownActive;
    console.log("notificationDropdownActive"); 
  }
  isNavbarDropdownActive:boolean = false;
  dropdownToggle(){
    this.isNavbarDropdownActive = !this.isNavbarDropdownActive;
    console.log(this.isNavbarDropdownActive); 
  }

  showAddGuest: boolean = false;

  


}
