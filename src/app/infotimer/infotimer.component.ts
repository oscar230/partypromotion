import { Component, OnInit } from '@angular/core';

class InfoObject {
  text: string;
  time: number;
}

@Component({
  selector: 'app-infotimer',
  templateUrl: './infotimer.component.html',
  styleUrls: ['./infotimer.component.scss']
})


export class InfotimerComponent implements OnInit {
  list = [
    {
      text: 'Nu smäller det, Campusfesten är här',
      time: new Date( 'May 28, 2020, 15:00' ).getTime()
    },
    {
      // tslint:disable-next-line:max-line-length
      text: 'Borrowed from German Fest. Related to Middle English feste, from Old French feste, from Latin festum however, the modern word is a borrowing of the German, which shares the same ultimate origin. More at feast.',
      time: 121333344
    }
  ];

  constructor() {
    console.log('current time ' + Date.now());
  }

  ngOnInit() {
  }

  timeLeft(info: InfoObject) {
    return Date.now() - info.time;
  }
}
