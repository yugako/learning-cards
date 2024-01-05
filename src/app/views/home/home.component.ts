import {Component, OnInit} from '@angular/core';
import {ContentService} from "../../services/content.service";
import {map, Observable} from "rxjs";
import {TopicsList} from "../../types";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public topicsList!: Observable<TopicsList[]>;

  constructor(private contentService: ContentService) {}

  public ngOnInit(): void {
    this.topicsList = this.contentService.entries.pipe(map(entries => {
      // @ts-ignore
      const entriesMap = Object.groupBy(entries, ({discipline}) => discipline);

      return Object.keys(entriesMap).map(entry => {
        return {
          title: `Discipline: ${entry.split('-').join(' ')}`,
          cards: entriesMap[entry],
          path: entry
        };
      });
    }));
  }
}
