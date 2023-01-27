import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @Input() cards!: Array<any>;
  @Input() level!: string;

  public categories: Array<string> = [];

  ngOnInit(): void {
    this.categories = [...new Set(this.cards.map(({category}) => category ?? 'other'))]
  }
}
