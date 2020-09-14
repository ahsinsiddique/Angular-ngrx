import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { AddEventComponent } from './add-event/add-event.component';
import { EventComponent } from './home/event/event.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { FeatureModule } from './feature-module/feature.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddEventComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
    FeatureModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
