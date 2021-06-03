import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectiveComponent } from './directive/directive.component';
import { PipeComponent } from './pipe/pipe.component';
import { HostListnerComponent } from './host-listner/host-listner.component';
import { TitlecasePipe } from './pipe/tittle-Case.pipe';
import { ListfilterPipe } from './pipe/list-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveComponent,
    PipeComponent,
    HostListnerComponent,
    TitlecasePipe,
    ListfilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
