import {Component, HostListener, OnInit} from '@angular/core';
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

  public topicId!: string | null;

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (!['ArrowRight', 'ArrowLeft'].includes(event.code)) return;

    this.calcLearningCards(event.code === 'ArrowRight' ? 1 : 0);
  }

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.topicId = this.route.snapshot.paramMap.get('slug') ?? '';

    this.cards = CARDS.filter(({category}) => this.topicId === 'all'
      ? !!category
      : !category || category === this.topicId);
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

  randomize() {
    const getRandomIndex = Math.round(Math.random() * (this.cards.length + 1));

    this.start = getRandomIndex;
    this.end = getRandomIndex + 1;
  }
}
