import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import {TopicSingleComponent} from "./views/topic-single/topic-single.component";
import {LevelSeniorComponent} from "./views/level-senior/level-senior.component";
import {LevelRmComponent} from "./views/level-rm/level-rm.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'senior',
        component: LevelSeniorComponent,
      },
      { path: 'senior/:slug', component: TopicSingleComponent },
      { path: 'rm', component: LevelRmComponent },
      { path: 'rm/:slug', component: TopicSingleComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
