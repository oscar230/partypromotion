import { Component, OnInit } from '@angular/core';

class EventObject {
  text: string;
  textEn: string;
  time: Date;
}

@Component({
  selector: 'app-infotimer',
  templateUrl: './infotimer.component.html',
  styleUrls: ['./infotimer.component.scss']
})


export class InfotimerComponent {
  eventsUnreleased: EventObject;
  eventsReleased: Array<EventObject> = [];
  eventsAll: Array<EventObject> = [
    {
      text: 'Campusfesten är igång! Gå till campus!',
      textEn: 'The annual Campus party is on right now! Head out to campus!',
      time: new Date( '05 30, 2020, 15:00' )
    },{
      text: 'Valborg',
      textEn: 'Valborg',
      time: new Date( '04 30, 2020, 15:00' )
    },{
      text: 'Nu',
      textEn: 'Now',
      time: new Date( '01 05, 2020, 15:00' )
    }
  ];

  constructor() {
    // Sort the "eventsAll" list by release date
    this.eventsAll.sort((a: EventObject, b: EventObject) => {
      return b.time.getTime() - a.time.getTime();
    });

    // Copy released and unreleased events to respective list
    for(let i = 0; i < this.eventsAll.length; i++){
      let event = this.eventsAll[i];
      if(event.time.getTime() <= Date.now()){
        this.eventsReleased.push(event);
      }else{
        if(this.eventsUnreleased == undefined || this.eventsUnreleased.time.getTime() > event.time.getTime()){
          this.eventsUnreleased = event;
        }
      }
    }
  }
}
