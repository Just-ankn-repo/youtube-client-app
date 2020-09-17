import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './modules/core/pages/page404/page404.component';
import { WelcomePageComponent } from './modules/core/pages/welcome-page/welcome-page.component';
import { AuthGuard } from './modules/core/guards/auth.guard';
import { AdminGuard } from "./modules/core/guards/admin.guard";

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
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/youtube/youtube.module').then(m => m.YoutubeModule)
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'search',
    redirectTo: ''
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
