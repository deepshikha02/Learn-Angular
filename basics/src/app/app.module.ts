import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    ComponentInteractionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
