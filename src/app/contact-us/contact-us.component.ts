import { Component } from '@angular/core';
import {ActivityComponent} from "../activity/activity.component";

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    ActivityComponent
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

}
