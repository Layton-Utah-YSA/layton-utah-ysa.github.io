import { Routes } from '@angular/router';
import {WardProgramComponent} from "./ward-program/ward-program.component";
import {BishopricComponent} from "./bishopric/bishopric.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  { path: "program", component: WardProgramComponent },
  { path: "bishopric", component: BishopricComponent },
  { path: "home", component: HomeComponent },
  { path: "**", redirectTo: "home" }
];
