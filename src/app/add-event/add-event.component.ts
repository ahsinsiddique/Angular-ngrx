import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Event } from '../models/event';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  eventForm: FormGroup;
  @Output() onAddEvent = new EventEmitter<Event>();
  name: string;
  date: string;
  address: string;

  newEvent: Event = new Event();

  constructor(private fb: FormBuilder,
              private ser: EventService) { }

  ngOnInit(): void {
    this.eventForm = this.fb.group({
      name: new FormControl('', Validators.required),
      date: new FormControl(),
      address: new FormControl(),
    });
    this.eventForm.valueChanges.subscribe(val => {
      let values = this.eventForm.value;

      this.newEvent = { name: values.name, date: values.date, address: values.address };
    });
  }

  onSubmit() {
    if (this.eventForm.valid) {
      console.log(this.newEvent);
      this.onAddEvent.emit(this.newEvent);
      this.ser.addNewEvent(this.newEvent);
    }

  }

}
