import { Component, OnInit } from '@angular/core';
import {CARDS} from "../../cards";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-topic-single',
  templateUrl: './topic-single.component.html',
  styleUrls: ['./topic-single.component.css']
})
export class TopicSingleComponent implements OnInit {
  title = 'learning-cards';
  cards: Array<any>  = [];
  step = 1;
  start = 0;
  end = this.step;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const topicId = this.route.snapshot.paramMap.get('slug');

    this.cards = this.getMixedCards().filter(({category}) => !category || category === topicId);
  }

  get learningCards() {
    return this.cards.slice(this.start, this.end);
  }

  calcLearningCards(state: number) {
    if (state) {
      this.start += this.step;
      this.end += this.step;
    } else {
      this.start -= this.step;
      this.end -= this.step;
    }
  }

  getMixedCards() {
    return CARDS
    // .map(value => ({ value, sort: Math.random() }))
    // .sort((a, b) => a.sort - b.sort)
    // .map(({ value }) => value);
  }
}
