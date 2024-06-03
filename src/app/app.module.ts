import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ChessBoardComponent } from './modules/chess-board/chess-board.component';


@NgModule({
  declarations: [
    AppComponent,
    ChessBoardComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
