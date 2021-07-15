import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UseClassRoutingModule } from './use-class-routing.module';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { CowComponent } from './cow/cow.component';
import { LionComponent } from './lion/lion.component';
import { AnyAnimalComponent } from './any-animal/any-animal.component';
import { UseClassComponent } from './use-class.component';

@NgModule({
  declarations: [
    UseClassComponent,
    AnimalDetailsComponent,
    CowComponent,
    LionComponent,
    AnyAnimalComponent,
  ],
  imports: [
    CommonModule,
    UseClassRoutingModule
  ]
})
export class UseClassModule { }
