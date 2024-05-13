import { Component, OnInit } from '@angular/core';
import { Guest } from '../guest';
import { ActivatedRoute } from '@angular/router';
import { GuestService } from '../guest.service';

@Component({
  selector: 'app-viewguest',
  templateUrl: './viewguest.component.html',
  styleUrls: ['./viewguest.component.scss']
})
export class ViewguestComponent  implements OnInit{

  id :number;
  guest:Guest;
  constructor(private route:ActivatedRoute,
    private guestservice:GuestService

  ){}


  ngOnInit(): void {
this.id=this.route.snapshot.params['id'];
this.guestservice.getGuestById(this.id).subscribe(data=>{
  this.guest=data;
})


  }

  




}
