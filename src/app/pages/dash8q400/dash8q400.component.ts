import { Component, OnInit } from '@angular/core';
import { cal_takeoff, cal_landing } from './performance';

@Component({
  selector: 'app-dash8q400',
  templateUrl: './dash8q400.component.html',
  styleUrls: ['./dash8q400.component.css']
})
export class Dash8q400Component implements OnInit {
  departure = "";
  departure_oat = "18";
  arrival = "";
  arrival_oat = "";
  takeoff_flapValue = "5";
  altitude = "5000";

  ZFW = "17.000";
  ALTN = "";
  RESV = "";
  CONT = "";
  DOM = "";
  DOI = "94.6";
  TAKEOFF = "";
  TRIP = "";

  V1 = "---";
  Vr = "---";
  V2 = "---";
  V_FRI = "---";
  V_CLIMB = "---";
  V_CRUISE = "---";

  landing_flapValue = "35";
  V_app = "---";
  V_ref = "---";
  V_ga = "---";

  onCalculate(mode): void {
    switch (mode){
      case 'takeoff':
        {
          var temp, Vr, V2, V_FRI, V_CLIMB;
          [temp, V_FRI, V_CLIMB] = cal_takeoff(this.takeoff_flapValue, this.departure_oat, this.altitude, this.ZFW);
          [Vr, V2] = temp;

          this.V1 = Vr;
          this.Vr = Vr;
          this.V2 = V2;
          this.V_FRI = V_FRI;
          this.V_CLIMB = V_CLIMB;
          break;
        }
      case 'landing':
        {
          var V_app, V_ref, V_ga;
          [V_app, V_ref, V_ga] = cal_landing(this.landing_flapValue, this.ZFW);

          this.V_app = V_app;
          this.V_ref = V_ref;
          this.V_ga = V_ga;
          break;
        }
    }

  }

  constructor() { }

  ngOnInit() {
  }

}
