import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { eventReducer } from './event.reducers';
import { EventsEffects } from './events.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('events', eventReducer ),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([EventsEffects])
  ]
})
export class FeatureModule { }
