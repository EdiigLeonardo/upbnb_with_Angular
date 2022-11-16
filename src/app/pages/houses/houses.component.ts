import { Component, OnInit } from '@angular/core';
import {UpbnbService} from "../../service/upbnb.service";

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent implements OnInit {

  casas: any;
  constructor(private upbnb: UpbnbService) { }

  ngOnInit(): void {
    this.upbnb.getCasas().subscribe((casas)=>{
      this.casas = <any> casas;
      console.log(this.casas)
  })
  }

}
