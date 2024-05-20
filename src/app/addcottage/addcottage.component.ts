// addcottage.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-addcottage',
  templateUrl: './addcottage.component.html',
  styleUrls: ['./addcottage.component.scss']
})
export class AddcottageComponent {
  selectedResort: any;
  selectedCottage: any;
  selectedAmenities: any;

  resorts = [
    { name: 'Resort 1', value: 'resort1' },
    { name: 'Resort 2', value: 'resort2' },
    { name: 'Resort 3', value: 'resort3' }
    // Add more resorts as needed
  ];

  cottages = [
    { name: 'Cottage 1', value: 'cottage1' },
    { name: 'Cottage 2', value: 'cottage2' },
    { name: 'Cottage 3', value: 'cottage3' }
    // Add more cottages as needed
  ];

  amenities = [
    { name: 'Wi-Fi', value: 'wifi' },
    { name: 'TV', value: 'tv' },
    { name: 'Air Conditioning', value: 'ac' },
    { name: 'Minibar', value: 'minibar' }
    // Add more amenities as needed
  ];
}
