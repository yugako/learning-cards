import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './views/home/home.component';
import { TopicSingleComponent } from './views/topic-single/topic-single.component';
import { HumanSlugPipe } from './pipes/human-slug.pipe';
import { LevelSeniorComponent } from './views/level-senior/level-senior.component';
import { LevelRmComponent } from './views/level-rm/level-rm.component';
import { CategoriesComponent } from './components/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    TopicSingleComponent,
    HumanSlugPipe,
    LevelSeniorComponent,
    LevelRmComponent,
    CategoriesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
