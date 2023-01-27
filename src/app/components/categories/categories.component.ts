import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @Input() cards!: Array<any>;
  @Input() level!: string;

  public categories: Array<string> = [];

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.categories = [...new Set(this.cards.map(({category}) => category ?? 'other'))]
  }
}
