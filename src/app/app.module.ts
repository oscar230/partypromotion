import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartyComponent } from './party/party.component';
import { InfotimerComponent } from './infotimer/infotimer.component';

@NgModule({
  declarations: [
    AppComponent,
    PartyComponent,
    InfotimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
