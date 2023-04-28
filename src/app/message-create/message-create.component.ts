import { Component, EventEmitter, Output } from '@angular/core';
import { MessageItem } from '../message-item.interface';

@Component({
  selector: 'app-message-create',
  templateUrl: './message-create.component.html',
  styleUrls: ['./message-create.component.css']
})
export class MessageCreateComponent {
  @Output() messageItemCreated = new EventEmitter<MessageItem>();
  newMessageItem: MessageItem = {
    ID: null,
    MessageText: ''
  };

  createNewMessage() {
    this.messageItemCreated.emit(this.newMessageItem);
    console.log(`New message created with ID ${this.newMessageItem.ID} and message text "${this.newMessageItem.MessageText}"`);
    this.newMessageItem = {
      ID: null,
      MessageText: ''
    };
  }
}
