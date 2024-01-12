import {Component, Input} from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss'
})
export class ActivityComponent {
  @Input() public title: string = "";
  @Input() public date: Date = new Date(Date.now());
}
