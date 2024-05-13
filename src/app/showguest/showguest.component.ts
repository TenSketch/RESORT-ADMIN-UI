import { Component, OnInit } from '@angular/core';
import { Guest } from '../guest';
import { GuestService } from '../guest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showguest',
  templateUrl: './showguest.component.html',
  styleUrls: ['./showguest.component.scss']
})
export class ShowguestComponent implements OnInit {
 
  guests: Guest[]; // Use the Guest interface for the guests property

constructor(private guestservice: GuestService,
  private router:Router
){}



  ngOnInit(): void {
    this.getGuestList();
    
  }

  private getGuestList(){
    this.guestservice.getGuests().subscribe(data=>{
      this.guests=data;
    });
  }

  updateGuest(id:number){
    this.router.navigate(['/updateguest',id])
  }

  deleteGuest(id:number){
    this.guestservice.deleteGuest(id).subscribe(data=>{
      console.log(data)
      this.getGuestList()
    })

  }

  guestdeatails(id:number){
    this.router.navigate(['/viewguestdetails',id]);
  }


}
