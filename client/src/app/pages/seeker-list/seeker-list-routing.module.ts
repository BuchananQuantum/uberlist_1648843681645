import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeekerListComponent } from './seeker-list.component';

const routes: Routes = [
  {
    path: '',
    component: SeekerListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeekerListRoutingModule { }
