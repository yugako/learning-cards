import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Card, QuestionEntry} from "../../types";
import {ContentService} from "../../services/content.service";

@Component({
  selector: 'app-topic-single',
  templateUrl: './topic-single.component.html',
  styleUrls: ['./topic-single.component.css']
})
export class TopicSingleComponent implements OnInit {
  public cards: Array<Card>  = [];
  public step = 1;

  public isQuestionsVisible = true;
  public topicId!: string | null;
  public currentIdx: number = 0;
  public currentCard!: any;

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (!['ArrowRight', 'ArrowLeft'].includes(event.code)) return;

    this.calcLearningCards(event.code === 'ArrowRight' ? 1 : 0);
  }

  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService
  ) {}

  ngOnInit() {
    this.topicId = this.route.snapshot.paramMap.get('slug') ?? '';

    const [ topicHost ] = this.route.snapshot.url;
    const path = topicHost.path;

    this.contentService.entries.subscribe(entries => {
      // @ts-ignore
      const entriesMap = Object.groupBy(entries, ({discipline}) => discipline);

      this.cards = (entries.length ? entriesMap[path].filter(({category}: QuestionEntry) => this.topicId === 'all'
        ? !!category
        : !category || category === this.topicId) : []).reverse();

      this.onCardSelect();
    })
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
    this.currentIdx = i < 0
      ? 0
      : i > this.cards.length - 1
        ? this.cards.length - 1
        : i;
    this.currentCard = this.cards[this.currentIdx];
  }

  onQuestionsToggle() {
    this.isQuestionsVisible = !this.isQuestionsVisible;
  }
}
