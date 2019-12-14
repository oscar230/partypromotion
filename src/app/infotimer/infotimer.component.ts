import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-infotimer',
  templateUrl: './infotimer.component.html',
  styleUrls: ['./infotimer.component.scss']
})
export class InfotimerComponent implements OnInit {
  list = [
    {
      header: "Testevent",
      body: "text eller hur.",
      time: Date.now() + 1000
    },{
      header: "Testevent",
      body: "text eller hur.",
      time: 121333344
    }
  ]

  constructor() {
    console.log("current time " + Date.now());
  }

  ngOnInit() {
  }

  timeLeft(info: infoobject){
    return Date.now() - info.time;
  }
}

class infoobject {
  header: string;
  body: string;
  time: number;
}