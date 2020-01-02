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
      time: new Date( '05 30, 2020, 15:00' )
    },
  ];
  ready = [];
  closest = 0;
  object = {};

  constructor() {
    this.list.forEach(e => {
      const temp = this.timeLeft( e );
      if (this.timeLeft(e) > 0) {
        this.ready.push( e );
      } else {
        if (this.closest === 0) {
          this.closest = temp;
          this.object = e;
        } else if (temp > this.closest) {
          this.closest = temp;
          this.object = e;
        }
      }
    });
    this.ready.unshift( this.object );
  }

  ngOnInit() {
  }

  timeLeft(info: InfoObject) {
    return Date.now() - info.time.getTime();
  }
}
