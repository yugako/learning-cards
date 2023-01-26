import { Component } from '@angular/core';
import { L3_CARDS } from "../../data/l3-cards";

@Component({
  selector: 'app-level-senior',
  templateUrl: './level-senior.component.html',
  styleUrls: ['./level-senior.component.css']
})
export class LevelSeniorComponent {
  public cards = L3_CARDS
}
