import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {NavigationBarComponent} from "./navigation-bar/navigation-bar.component";
import {ActivityComponent} from "./activity/activity.component";
import {ActivitiesComponent} from "./activities/activities.component";
import {MatGridListModule} from "@angular/material/grid-list";

// based on the kaysvilleysa.com website using https://htmlstream.com/hire-us

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavigationBarComponent, ActivityComponent, ActivitiesComponent, MatGridListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
