import { Component } from '@angular/core';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-viewroom',
  templateUrl: './viewroom.component.html',
  styleUrls: ['./viewroom.component.scss']
})
export class ViewroomComponent {
  rooms: any[] = [];

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.roomService.getRooms().subscribe(
      data => this.rooms = data,
      error => console.error('Error fetching room data', error)
    );
  }

}
