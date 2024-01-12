import { Component } from '@angular/core';
import {ActivitiesComponent} from "../activities/activities.component";
import {ActivityComponent} from "../activity/activity.component";
import {BannerComponent} from "../banner/banner.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ActivitiesComponent,
    ActivityComponent,
    BannerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
