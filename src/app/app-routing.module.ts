import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondContentComponent } from './second-content/second-content.component';
import { FirstContentComponent } from './first-content/first-content.component';

const routes: Routes = [
  {
    path: 'first',
    component: FirstContentComponent
  },
  {
    path: 'second',
    component: SecondContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
