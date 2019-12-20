import { Component, OnInit } from '@angular/core';

class InfoObject {
  text: string;
  time: Date;
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
      time: new Date( '01 28, 2020, 15:00' )
    },
    {
      text: 'Borrowed from German Fest. Related to Middle English feste, from Old French feste, from Latin festum however, the modern word is a borrowing of the German, which shares the same ultimate origin. More at feast.',
      time: new Date( 'May 28, 2019, 00:00' )
    }
  ];

  constructor() {
    this.list.forEach(e => {
      console.log(e.time + ":" + this.timeLeft(e) + " -> " + e.text);
    });
  }

  ngOnInit() {
  }

  timeLeft(info: InfoObject) {
    return Date.now() - info.time.getTime();
  }
}
