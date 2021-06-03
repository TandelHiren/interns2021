import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectiveComponent } from './directive/directive.component';
import { PipeComponent } from './pipe/pipe.component';
import { HostListnerComponent } from './host-listner/host-listner.component';

const routes: Routes = [
  {
    path:'directive',
    component: DirectiveComponent
  },
  {
    path:'pipe',
    component: PipeComponent
  },
  {
    path:'host-listner',
    component: HostListnerComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
