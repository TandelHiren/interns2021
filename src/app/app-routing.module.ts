import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectiveComponent } from './directive/directive.component';
import { PipeComponent } from './pipe/pipe.component';
import { HostListnerComponent } from './host-listner/host-listner.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { KidsModule } from './kids/kids.module';

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
  {
    path:'bootstrap',
    component: BootstrapComponent
  },
  {
    path:'kids',
    component: KidsModule
  },
  {
    path:'subject',
    loadChildren: () => import('./subject/subject.module').then(m => m.SubjectModule)
  },
  {
    path:'behavior-subject',
    loadChildren: () => import('./behaviour-subject/behaviour-subject.module').then(m => m.BehaviourSubjectModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
