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
      time: new Date( '05 30, 2020, 10:00' )
    },{
      text: 'En dag kvar till årets fest! Vad sägs om en förfest?',
      textEn: 'One day left until the best experience of Karlstad you will ever have. Why not set up a pre-party?',
      time: new Date( '05 29, 2020, 07:00' )
    },{
      text: 'Två dagar kvar! Förbered dig.',
      textEn: 'Two days left! Get ready.',
      time: new Date( '05 28, 2020, 07:00' )
    },{
      text: 'Brutalborg, varför sluta?',
      textEn: 'Brutalborg, why stop?',
      time: new Date( '05 2, 2020, 07:00' )
    },{
      text: 'Finalborg',
      textEn: 'Finalborg',
      time: new Date( '05 1, 2020, 07:00' )
    },{
      text: 'Save the date 30e Maj!',
      textEn: 'Save the date 30th of May!',
      time: new Date( '04 30, 2020, 16:00' )
    },{
      text: 'Valborg',
      textEn: 'Valborg',
      time: new Date( '04 30, 2020, 07:00' )
    },{
      text: 'Kvalborg',
      textEn: 'Kvalborg',
      time: new Date( '04 29, 2020, 07:00' )
    },{
      text: 'Skvalborg',
      textEn: 'Skvalborg',
      time: new Date( '04 28, 2020, 07:00' )
    },{
      text: 'Prevalborg',
      textEn: 'Prevalborg',
      time: new Date( '04 27, 2020, 07:00' )
    },{
      text: 'Valborgsveckan är snar här! Karlstads höjdpunkt, då studenter vallfärdar till Välsviken för att lägga sitt CSN på Kir.',
      textEn: 'A week of partying inkluding Valborg on 30/5 are coming up! Fill your fridges with the best that Systembolaget can offer.',
      time: new Date( '04 23, 2020, 15:00' )
    },{
      text: 'Dunderkravallen 2020. Dubbelt så stort, 4 gånger så bra!',
      textEn: 'Dunderkravallen 2020. Twice as big as last year, four times as awesome!',
      time: new Date( '03 13, 2020, 07:00' )
    },{
      text: 'Säkra dina biljetter till Dunderkravallen. Detta vill du inte missa!',
      textEn: 'Get your ticket for Dunderkravallen 2020!',
      time: new Date( '02 20, 2020, 07:00' )
    },{
      text: 'Gott nytt år! Karlstads studentliv har mycket att leverera under 2020 inklusive Dunderkravallen, Valborg, Ovveveckan och Campusfesten. Håll koll på alla fester på denna sida.',
      textEn: 'Happy new year! Karlstad has a lot to offer. Inkluding Dunderkravallen, Valborg, Ovveveckan and the annual Campus party. Keep track of all the festive activities on this site.',
      time: new Date( '01 01, 2020, 01:00' )
    }
  ];

  constructor() {
    // Sort the "eventsAll" list by release date
    this.eventsAll.sort((a: EventObject, b: EventObject) => {
      return b.time.getTime() - a.time.getTime();
    });

    // Copy released and unreleased events to respective dataset
    for(let i = 0; i < this.eventsAll.length; i++){
      let event = this.eventsAll[i];
      if(event.time.getTime() <= Date.now()){
        // Copy to released events list
        this.eventsReleased.push(event);
      }else{
        if(this.eventsUnreleased == undefined || this.eventsUnreleased.time.getTime() > event.time.getTime()){
          // Overwrite latest upcoming event
          this.eventsUnreleased = event;
        }
      }
    }
  }
}
