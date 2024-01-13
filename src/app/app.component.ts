import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {NavigationBarComponent} from "./navigation-bar/navigation-bar.component";
import {ActivityComponent} from "./activity/activity.component";
import {ActivitiesComponent} from "./activities/activities.component";
import {ChurchNamePlaqueComponent} from "./church-name-plaque/church-name-plaque.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CommonModule, RouterOutlet, NavigationBarComponent, ActivityComponent, ActivitiesComponent, ChurchNamePlaqueComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'layton-ysa-website';
}
