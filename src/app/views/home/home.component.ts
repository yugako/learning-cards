import { Component } from '@angular/core';
import {TOPICS_LIST} from "../../constants";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public topicsList = TOPICS_LIST;
}
