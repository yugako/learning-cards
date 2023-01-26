import { Component } from '@angular/core';
import {RmCards} from "../../data/rm-cards";

@Component({
  selector: 'app-level-rm',
  templateUrl: './level-rm.component.html',
  styleUrls: ['./level-rm.component.css']
})
export class LevelRmComponent  {
  public cards = RmCards;
}
