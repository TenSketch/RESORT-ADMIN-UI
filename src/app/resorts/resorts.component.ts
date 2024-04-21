import { Component } from '@angular/core';

@Component({
  selector: 'app-resorts',
  templateUrl: './resorts.component.html',
  styleUrls: ['./resorts.component.scss']
})
export class ResortsComponent {
[x: string]: any;
  resortName: string;
  slug: string;
  contactNumber: string;
  email: string;
  address: string;
  website: string;
  termsAndConditions: string;
  upiId: string;
  logo: File = new File([], ''); // Initialize to empty File object
  qrFile: File = new File([], ''); // Initialize to empty File object
  foodDetails: string;
countries: any;
postalCode: any;

  constructor() { }

  submitForm() {
    // You can handle form submission logic here
    console.log('Form submitted!');
    console.log('Resort Name:', this.resortName);
    console.log('Slug:', this.slug);
    console.log('Contact Number:', this.contactNumber);
    console.log('Email:', this.email);
    console.log('Address:', this.address);
    console.log('Website:', this.website);
    console.log('Terms and Conditions:', this.termsAndConditions);
    console.log('UPI ID:', this.upiId);
    console.log('Logo:', this.logo);
    console.log('QR File:', this.qrFile);
    console.log('Food Details:', this.foodDetails);
    
    // Reset the form after submission
    this.resetForm();
  }

  resetForm() {
    // Reset all form fields to their initial state
    this.resortName = '';
    this.slug = '';
    this.contactNumber = '';
    this.email = '';
    this.address = '';
    this.website = '';
    this.termsAndConditions = '';
    this.upiId = '';
    this.logo = new File([], ''); // Reset to empty File object
    this.qrFile = new File([], ''); // Reset to empty File object
    this.foodDetails = '';
  }

  onLogoChange(event: any) {
    // Handle logo file change event
    this.logo = event.target.files[0];
  }

  onQRFileChange(event: any) {
    // Handle QR file change event
    this.qrFile = event.target.files[0];
  }
}
