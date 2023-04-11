import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { MapComponent } from './rxjs/map/map.component';
import { PromiseComponent } from './rxjs/promise/promise.component';
import { RxjsComponent } from './rxjs.component';
import { ObservableComponent } from './rxjs/observable/observable.component';
import { ObservableService } from './rxjs/observable.service';
import { IntervalComponent } from './rxjs/interval/interval.component';
import { SwitchMapComponent } from './rxjs/switch-map/switch-map.component';
import { MergeMapComponent } from './rxjs/merge-map/merge-map.component';

@NgModule({
  declarations: [MapComponent,
    PromiseComponent,
    RxjsComponent,
    ObservableComponent,
    IntervalComponent,
    SwitchMapComponent,
    MergeMapComponent
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule,

  ],
  providers: [ObservableService]
})
export class RxjsModule { }
