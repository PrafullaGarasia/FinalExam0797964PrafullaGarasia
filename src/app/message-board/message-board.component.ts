import { Component } from '@angular/core';
import { MessageItem } from '../message-item.interface';

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.sass']
})
export class MessageBoardComponent {
addMessage($event: MessageItem) {
throw new Error('Method not implemented.');
}
messages: any;

}
