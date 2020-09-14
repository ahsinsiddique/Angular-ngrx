import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Event } from '../../models/event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  @Input() isAddEvent = false;
  @Input() event: Event;
  @Output() eventSelected = new EventEmitter<Event>();


  constructor() { }

  ngOnInit(): void {
  }

  onEventSelected(event: Event) {
    this.eventSelected.emit(event);
  }
}
