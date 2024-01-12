import { Component } from '@angular/core';
import {ActivityComponent} from "../activity/activity.component";

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [
    ActivityComponent
  ],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.scss'
})
export class ActivitiesComponent {

}
