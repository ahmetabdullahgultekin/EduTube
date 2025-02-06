import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-meeting-details-page',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './meeting-details-page.component.html',
  styleUrl: './meeting-details-page.component.css'
})
export class MeetingDetailsPageComponent {

}
