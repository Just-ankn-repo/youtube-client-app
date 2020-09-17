import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPageComponent } from "./pages/admin-page/admin-page.component";
import { CreateCardFormComponent } from "./components/create-card-form/create-card-form.component";
import { UpdateCardFormComponent } from "./components/update-card-form/update-card-form.component";

const childRoutes: Routes = [
  {
    path: 'create',
    component: CreateCardFormComponent
  },
  {
    path: 'update/:cardId',
    component: UpdateCardFormComponent
  }
];

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    children: childRoutes
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
