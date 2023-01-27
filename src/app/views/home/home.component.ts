import { Component } from '@angular/core';
import {L3_CARDS} from "../../data/l3-cards";
import {RmCards} from "../../data/rm-cards";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public levels = [
    {
      title: 'Level: Senior',
      cards: L3_CARDS,
      path: 'senior'
    },
    {
      title: 'Level: Software Engineering Team Leader',
      cards: RmCards,
      path: 'rm'
    }
  ]
}
