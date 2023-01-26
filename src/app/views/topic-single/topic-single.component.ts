import {Component, HostListener, OnInit} from '@angular/core';
import {L3_CARDS} from "../../data/l3-cards";
import {ActivatedRoute} from "@angular/router";
import {Card} from "../../types";
import {RmCards} from "../../data/rm-cards";

type CardsOptions = {
  [key: string]: Array<Card>
}

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

  cardsMapper: CardsOptions = {
    'senior': L3_CARDS,
    'rm': RmCards
  };

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
    const [ topicHost ] = this.route.snapshot.url;

    const path = topicHost.path;

    this.cards = this.cardsMapper[path].filter(({category}) => this.topicId === 'all'
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
    const randomIndex = Math.round(Math.random() * (this.cards.length - 1));

    this.start = randomIndex;
    this.end = randomIndex + 1;
  }
}
