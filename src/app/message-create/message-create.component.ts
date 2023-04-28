import { Component, EventEmitter, Output } from '@angular/core';
import { MessageItem } from '../message-item';

@Component({
  selector: 'app-message-create',
  templateUrl: './message-create.component.html',
  styleUrls: ['./message-create.component.css']
})
export class MessageCreateComponent {
  @Output() messageCreated = new EventEmitter<MessageItem>();
  newMessage: MessageItem = { ID: null, MessageText: '' };

  createMessage() {
    this.messageCreated.emit(this.newMessage);
    this.newMessage = { ID: null, MessageText: '' };
    console.log('Message created successfully. ID: ' + this.newMessage.ID + ', MessageText: ' + this.newMessage.MessageText);
  }
}
