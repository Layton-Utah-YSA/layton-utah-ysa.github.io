import {Component, Input} from '@angular/core';
import {DatePipe} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {DateTimePipe} from "../date-time.pipe";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [
    DatePipe,
    MatCardModule,
    DateTimePipe,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss'
})
export class ActivityComponent {
  @Input() public title: string = "";
  @Input() public date: Date = new Date(Date.now());
  @Input() public address?: string;
}
