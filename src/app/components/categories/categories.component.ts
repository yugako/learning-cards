import {Component, Input, OnInit} from '@angular/core';
import {Card} from "../../types";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @Input() cards: Array<Card>;
  @Input() level: string;

  public categories: Array<string> = [];

  ngOnInit(): void {
    this.categories = this.cards ? [...new Set(this.cards.map(({category}) => category ?? 'other'))] : [];
  }
}
