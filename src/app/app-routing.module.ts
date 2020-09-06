import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Page404Component} from "./modules/core/components/page404/page404.component";
import {SearchResultsComponent} from "./modules/youtube/components/search-result/search-result.component";
import {AppComponent} from "./app.component";
import {AuthFormComponent} from "./modules/auth/components/auth-form/auth-form.component";
import {WelcomePageComponent} from "./modules/core/components/welcome-page/welcome-page.component";
import {YoutubeModule} from "./modules/youtube/youtube.module";

const routes: Routes = [
  {
    path: '',
    component: WelcomePageComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'search/:searchKeyWord',
    loadChildren: () => import('./modules/youtube/youtube.module').then(m => m.YoutubeModule)
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
