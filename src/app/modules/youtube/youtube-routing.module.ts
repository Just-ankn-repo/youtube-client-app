import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchResultsComponent} from "./pages/search-result/search-result.component";
import {CardDetailsComponent} from "./components/card-details/card-details.component";

const routes: Routes = [
  {
    path: '',
    component: SearchResultsComponent
  },
  {
    path: 'details/:cardId',
    component: CardDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoutubeRoutingModule { }
