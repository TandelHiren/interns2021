import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { MapComponent } from './rxjs/map/map.component';
import { PromiseComponent } from './rxjs/promise/promise.component';
import { RxjsComponent } from './rxjs.component';

@NgModule({
  declarations: [MapComponent, PromiseComponent, RxjsComponent],
  imports: [
    CommonModule,
    RxjsRoutingModule
  ]
})
export class RxjsModule { }
