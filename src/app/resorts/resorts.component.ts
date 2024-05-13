import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-resorts',
  templateUrl: './resorts.component.html',
  styleUrls: ['./resorts.component.scss']
})
export class ResortsComponent {
  resortName: string;
  slug: string;
  contactNumber: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  imagelogo: File;
  website: string;
  upiId: string;
  qrFile: File;
  foodDetails: string;
countries: any;

  constructor(private http: HttpClient) {}

  submitForm() {
    const formData = new FormData();
    formData.append('resortName', this.resortName);
    formData.append('slug', this.slug);
    formData.append('contactNumber', this.contactNumber);
    formData.append('email', this.email);
    formData.append('addressLine1', this.addressLine1);
    formData.append('addressLine2', this.addressLine2);
    formData.append('city', this.city);
    formData.append('state', this.state);
    formData.append('postalCode', this.postalCode);
    formData.append('country', this.country);
    formData.append('imagelogo', this.imagelogo);
    formData.append('website', this.website);
    formData.append('upiId', this.upiId);
    formData.append('qrFile', this.qrFile);
    formData.append('foodDetails', this.foodDetails);

    this.http.post<any>('http://localhost:8080/api/resort1', formData).subscribe(
      response => {
        console.log('Resort created successfully:', response);
        // Optionally, reset the form here
        this.resetForm();
      },
      error => {
        console.error('Error creating resort:', error);
      }
    );
  }

  resetForm() {
    // Reset all form fields
    this.resortName = '';
    this.slug = '';
    this.contactNumber = '';
    this.email = '';
    this.addressLine1 = '';
    this.addressLine2 = '';
    this.city = '';
    this.state = '';
    this.postalCode = '';
    this.country = '';
   // this.logo = null;
    this.website = '';
    this.upiId = '';
   // this.qrFile = null;
    this.foodDetails = '';
  }

  onLogoChange(event: any) {
    // Handle logo file change event
    this.imagelogo = event.target.files[0];
  }

  onQRFileChange(event: any) {
    // Handle QR file change event
    this.qrFile = event.target.files[0];
  }
}
