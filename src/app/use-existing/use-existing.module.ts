import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UseExistingRoutingModule } from './use-existing-routing.module';
import { UseExistingComponent } from './use-existing.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [UseExistingComponent, BookComponent],
  imports: [
    CommonModule,
    UseExistingRoutingModule
  ]
})
export class UseExistingModule { }
