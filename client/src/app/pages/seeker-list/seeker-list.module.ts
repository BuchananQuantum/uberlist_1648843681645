import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeekerListComponent } from './seeker-list.component';
import { SeekerListRoutingModule } from './seeker-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SeekerListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    SeekerListComponent
  ]
})
export class SeekerListModule { }
