import { Component } from '@angular/core';
import {ActivityComponent} from "../activity/activity.component";

@Component({
  selector: 'app-general-info',
  standalone: true,
  imports: [
    ActivityComponent
  ],
  templateUrl: './general-info.component.html',
  styleUrl: './general-info.component.scss'
})
export class GeneralInfoComponent {

}
