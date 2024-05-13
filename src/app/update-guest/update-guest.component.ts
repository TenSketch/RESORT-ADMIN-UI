import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GuestService } from '../guest.service';
import { Guest } from '../guest';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-guest',
  templateUrl: './update-guest.component.html',
  styleUrls: ['./update-guest.component.scss']
})
export class UpdateGuestComponent implements OnInit {
  id: number;
  guest: Guest = new Guest();
  addguestform: FormGroup; // Initialize addguestform FormGroup
  countries: string[] = ["India", "Japan"]; // Initialize countries array

  constructor(
    private guestService: GuestService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.guestService.getGuestById(this.id).subscribe(
      data => {
        this.guest = data;
        this.initializeForm();
      },
      error => console.log(error)
    );
  }

  goToList() {
    this.router.navigate(['/viewguest']);
  }

  submitForm() {
    // Update the guest object with form values before submitting
    this.guest = { ...this.guest, ...this.addguestform.value };
    console.log('Form Values:', this.addguestform.value); // Log form values for debugging
    console.log('Updated Guest:', this.guest); // Log updated guest object for debugging
    
    this.guestService.updateGuest(this.id, this.guest).subscribe(
      data => {
        this.goToList();
      },
      error => console.log(error)
    );
  }
  

  onImageSelected(event: any) {
    // Implement image selection handling if necessary
  }

  private initializeForm() {
    this.addguestform = this.formBuilder.group({
      fullname: [this.guest.fullname],
      phone: [this.guest.phone],
      email: [this.guest.email],
      profileImage: [this.guest.profileImage],
      nationality: [this.guest.nationality],
      addressLine1: [this.guest.addressLine1],
      addressLine2: [this.guest.addressLine2],
      city: [this.guest.city],
      state: [this.guest.state],
      postalCode: [this.guest.postalCode],
      country: [this.guest.country],
    });
  }
}
