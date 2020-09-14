import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Event } from '../models/event';
import { EventService } from '../services/event.service';
import { Store } from '@ngrx/store';
import { AddEvent, GetEvent } from '../feature-module/event.actions';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  eventForm: FormGroup;
  @Output() onAddEvent = new EventEmitter<Event>();
  // name: string;
  // date: string;
  // address: string;
  events = [];
  newEvent: Event = new Event();
  eventId: number;

  constructor(private fb: FormBuilder,
              private ser: EventService,
              private store: Store<any>) { }

  ngOnInit(): void {
    this.eventForm = this.fb.group({
      name: new FormControl('', Validators.required),
      date: new FormControl(),
      address: new FormControl(),
    });
    this.getData();
    this.eventForm.valueChanges.subscribe(val => {
      let values = this.eventForm.value;

      this.newEvent = { id: this.eventId, name: values.name, date: values.date, address: values.address };
    });
  }

  getData() {
    this.store.dispatch(new GetEvent());
    this.store.select('events').subscribe(response => {
      this.events = response.events;
      this.eventId = this.computeEventId();
    }, error => {
      console.log(error);
    });
  }

  computeEventId() {
    if (this.events.length < 1) {
      return 0;
    }
    return this.events.length + 1;
  }


  onSubmit() {
    if (this.eventForm.valid) {
      this.store.dispatch(new AddEvent(this.newEvent));
    }
  }

}
