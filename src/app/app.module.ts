import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExerciceComponent } from './exercice/exercice.component';
import { ChangeFontSizeDirective } from './exercice/change-font-size.directive';

@NgModule({
  declarations: [
    AppComponent,
    ExerciceComponent,
    ChangeFontSizeDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
