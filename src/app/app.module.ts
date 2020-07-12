import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { CardComponent } from './wrapper/card/card.component';
import {GameLogicService} from './wrapper/game-logic.service';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GameLogicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
