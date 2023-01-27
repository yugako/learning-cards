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
  public cards: Array<any>  = [];
  public step = 1;

  public isQuestionsVisible = true;

  public cardsMapper: CardsOptions = {
    'senior': L3_CARDS,
    'rm': RmCards
  };

  public topicId!: string | null;
  public currentIdx: number = 0;
  public currentCard!: any;

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

    this.onCardSelect();
  }

  calcLearningCards(state: number) {
    state
      ? this.currentIdx+=this.step
      : this.currentIdx-=this.step;

    this.onCardSelect(this.currentIdx);
  }

  randomize() {
    this.onCardSelect(Math.round(Math.random() * (this.cards.length - 1)));
  }

  onCardSelect(i: number = 0) {
    this.currentIdx = i;
    this.currentCard = this.cards[this.currentIdx];
  }

  onQuestionsToggle() {
    this.isQuestionsVisible = !this.isQuestionsVisible;
  }
}
