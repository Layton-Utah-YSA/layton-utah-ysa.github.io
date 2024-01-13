import {Component, Input} from '@angular/core';
import {DatePipe} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {DateTimePipe} from "../date-time.pipe";

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [
    DatePipe,
    MatCardModule,
    DateTimePipe
  ],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss'
})
export class ActivityComponent {
  @Input() public title: string = "";
  @Input() public date: Date = new Date(Date.now());
}
