import { Component, OnInit } from '@angular/core';
import {UpbnbService} from "../../service/upbnb.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  booking: any;
  booking_past: any;

  constructor(private upbnb: UpbnbService) { }

  ngOnInit(): void {
    this.upbnb.getActualBooking().subscribe((booking)=>{
      this.booking = <any> booking;
    })

    this.upbnb.getPastBooking().subscribe((booking)=>{
      this.booking_past = <any> booking;
    })
  }

}
