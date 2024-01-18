import {Component, OnInit} from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {ChurchNamePlaqueComponent} from "../church-name-plaque/church-name-plaque.component";
import {MatIconModule} from "@angular/material/icon";
import {BreakpointObserver, BreakpointState} from "@angular/cdk/layout";

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    RouterLink,
    ChurchNamePlaqueComponent,
    MatIconModule
  ],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent implements OnInit {
  protected shouldShowMenu: boolean = false;
  protected isMenuOpen: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(min-width: 768px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.shouldShowMenu = false;
        } else {
          this.shouldShowMenu = true;
        }
      })
  }

  protected onMenuOpen() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
