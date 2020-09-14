import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Event } from '../models/event';
import { Store } from '@ngrx/store';
import { AddEvent, EventsActionType, GetEvent } from '../feature-module/event.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  events: Event[] = [];

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.getData();
  }

  onEventSelected(event: Event) {
    console.log('event selected: ' + event);
  }

  getData() {
    this.store.dispatch(new GetEvent());
    this.store.select('events').subscribe(response => {

      console.log(response);
      this.events = response.events;

      setTimeout(() => {
      }, 2000);

    }, error => {
      console.log(error);
    });
  }


}
