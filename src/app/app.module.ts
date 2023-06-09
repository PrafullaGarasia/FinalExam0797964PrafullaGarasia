import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MessageBoardComponent } from './message-board/message-board.component';
import { MessageCreateComponent } from './message-create/message-create.component';
import { MessageItemComponent } from './message-item/message-item.component';
import { ClockComponent } from './clock/clock.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/messageBoard', pathMatch: 'full' },
  { path: 'messageBoard', component: MessageBoardComponent },
  { path: 'clock', component: ClockComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    PageNotFoundComponent,
    MessageBoardComponent,
    MessageCreateComponent,
    MessageItemComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
