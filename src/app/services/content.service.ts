import { Injectable } from '@angular/core';
import {createClient} from "contentful";
import {documentToHtmlString} from "@contentful/rich-text-html-renderer";
import {Document} from "@contentful/rich-text-types";
import {BehaviorSubject} from "rxjs";
import {environment} from "../../environments/environment";
import {QuestionEntry} from "../types";

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  public entries: BehaviorSubject<QuestionEntry[]> = new BehaviorSubject<QuestionEntry[]>([]);

  public getContent(): void {
    createClient({
      space: environment.spaceId,
      accessToken: environment.accessToken
    }).getEntries({
      limit: 1000
    })
      .then(({items}) => items.map(({fields: {
        question,
        category,
        answer,
        discipline
      }, sys: {id}}) => {
        return {
          id,
          question,
          category,
          discipline,
          answer: documentToHtmlString(answer as Document)
        } as QuestionEntry;
      }))
      .then((entries: QuestionEntry[]) => {
        this.entries.next(entries);
      })
      .catch((err) => {
        console.log(err);
        this.entries.next([]);
      });
  }
}
