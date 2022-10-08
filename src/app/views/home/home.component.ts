import { Component, OnInit } from '@angular/core';
import {CARDS} from "../../cards";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private cards = CARDS;
  public categories: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
    this.categories = [...new Set(this.cards.map(({category}) => category ?? 'other'))]
  }
}
