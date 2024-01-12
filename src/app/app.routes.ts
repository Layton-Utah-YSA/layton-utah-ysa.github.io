import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {BishopricComponent} from "./bishopric/bishopric.component";
import {WardProgramComponent} from "./ward-program/ward-program.component";

export const routes: Routes = [
  { path: "program", component: WardProgramComponent },
  { path: "bishopric", component: BishopricComponent },
  { path: "home", component: HomeComponent },
  { path: "**", redirectTo: "home" }
];
