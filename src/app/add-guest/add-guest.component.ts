import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-guest',
  templateUrl: './add-guest.component.html',
  styleUrls: ['./add-guest.component.scss']
})
export class AddGuestComponent {
  countries: string[] = ['Select All Countries', /* List of countries goes here */];





  addguestform = new FormGroup({
    fullname:new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern('[a-zA-Z].*')]),
    phone:new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("[0-9]*")]),
    email:new FormControl("",[Validators.required,Validators.email]),
    registrationDate:new FormControl("",[Validators.required]),
    accountStatus:new FormControl("",[Validators.required]),
    emailVerification:new FormControl("",[Validators.required]),
    emailVerificationToken:new FormControl("",[Validators.required]),
    accessToken:new FormControl("",[Validators.required])
    })

    get FullName():FormControl{
      return this.addguestform.get("fullname") as FormControl
    }
    get Phone():FormControl{
      return this.addguestform.get("phone") as FormControl
    }
    get Email():FormControl{
      return this.addguestform.get("email") as FormControl
    }
    get RegistrationDate():FormControl{
      return this.addguestform.get("registrationDate") as FormControl
    }
    get AccountStatus():FormControl{
      return this.addguestform.get("accountStatus") as FormControl
    }
    get EmailVarification():FormControl{
      return this.addguestform.get("emailVerification") as FormControl
    }
    get EmailVerificationToken():FormControl{
      return this.addguestform.get("emailVerificationToken") as FormControl
    }
    get AccessToken():FormControl{
      return this.addguestform.get("accessToken") as FormControl
    }









  submitForm() {

    // Handle form submission
    console.log('Form submitted');
    console.log(this.addguestform);
  }

  resetForm() {
    // Reset form
    console.log('Form reset');
  }


  selectedFileName: string = ''; // To store the selected file name

  constructor() { }

  onImageSelected(event: any): void {
    const file = event.target.files[0]; // Get the selected file
    this.selectedFileName = file.name; // Update the selected file name
    // Implement your image upload logic here
    this.uploadImage(file); // Call a method to handle image upload
  }

  uploadImage(file: File): void {
    // Implement your image upload logic here
    // For example, you can use Angular's HttpClient to send the file to a server
  }

}
