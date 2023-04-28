import { Component } from '@angular/core';
import { MessageItem } from '../message-item.interface';

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.css']
})
export class MessageBoardComponent {
  messages: MessageItem[] = [];

  addMessageItem(newMessageItem: MessageItem) {
    this.messages.push(newMessageItem);
  }
}
