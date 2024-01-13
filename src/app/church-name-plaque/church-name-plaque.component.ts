import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-church-name-plaque',
  standalone: true,
  imports: [],
  templateUrl: './church-name-plaque.component.html',
  styleUrl: './church-name-plaque.component.scss'
})
export class ChurchNamePlaqueComponent {
  @Input() public height: number = 50;
  @Input() public width: number = 50;
}
