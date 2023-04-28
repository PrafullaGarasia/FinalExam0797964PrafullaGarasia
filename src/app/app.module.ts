import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MessageBoardComponent } from './message-board/message-board.component';
import { MessageCreateComponent } from './message-create/message-create.component';
import { MessageItemComponent } from './message-item/message-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    PageNotFoundComponent,
    MessageBoardComponent,
    MessageCreateComponent,
    MessageItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
