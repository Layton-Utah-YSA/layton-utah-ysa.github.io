import { Component } from '@angular/core';
import {ActivitiesComponent} from "../activities/activities.component";
import {ActivityComponent} from "../activity/activity.component";
import {BannerComponent} from "../banner/banner.component";
import {ContactUsComponent} from "../contact-us/contact-us.component";
import {GeneralInfoComponent} from "../general-info/general-info.component";
import {ScheduleComponent} from "../schedule/schedule.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ActivitiesComponent,
    ActivityComponent,
    BannerComponent,
    ContactUsComponent,
    GeneralInfoComponent,
    ScheduleComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
