import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicComponentRoutingModule } from './dynamic-component-routing.module';
import { GuestCardComponentComponent } from './guest-card-component/guest-card-component.component';
import { UserCardComponentComponent } from './user-card-component/user-card-component.component';
import { DynamicComponent } from './dynamic.component';
import { ProfileHostDirective } from './profile-host.directive';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile.service';

@NgModule({
  declarations: [
    GuestCardComponentComponent,
    UserCardComponentComponent,
    DynamicComponent,
    ProfileHostDirective,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    DynamicComponentRoutingModule
  ],
  providers:[ProfileService],
  entryComponents:[ UserCardComponentComponent,GuestCardComponentComponent]
})
export class DynamicComponentModule { }
