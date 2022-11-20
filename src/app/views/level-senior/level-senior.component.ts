import { Component, OnInit } from '@angular/core';
import {CARDS} from "../../cards";

@Component({
  selector: 'app-level-senior',
  templateUrl: './level-senior.component.html',
  styleUrls: ['./level-senior.component.css']
})
export class LevelSeniorComponent implements OnInit {
  private cards = CARDS;
  public categories: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
    this.categories = [...new Set(this.cards.map(({category}) => category ?? 'other'))]
  }
}
