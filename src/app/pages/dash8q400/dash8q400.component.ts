import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash8q400',
  templateUrl: './dash8q400.component.html',
  styleUrls: ['./dash8q400.component.css']
})
export class Dash8q400Component implements OnInit {
  departure = "";
  arrival = "";
  flapValue = "5";

  ZFW = "";
  ALTN = "";
  RESV = "";
  CONT = "";
  DOM = "";
  DOI = "94.6";
  TAKEOFF = "";
  TRIP = "";

  constructor() { }

  ngOnInit() {
  }

}
