import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UpbnbService} from "../../service/upbnb.service";

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  possibleFeatures = [
    'petsAllowed',
    'microwave',
    'smoking',
    'tv',
    'washer',
    'wifi',
    'airConditioner',
    'firePlace'
  ]
  features_actives: string[] = [];
  features_inactives: [] = [];
  house_conditions: object = {};

  constructor(private route: ActivatedRoute, private upbnb : UpbnbService) { }

  ngOnInit(): void {
    let id_casa = this.route.snapshot.params['id_casa'];

    //getFeatures
    this.upbnb.getFeatures(id_casa).subscribe((details)=>{
      this.house_conditions = details;
      this.possibleFeatures.forEach(feature => {
        // @ts-ignore
        if(this.house_conditions?.features.includes(feature)) {
          this.features_actives.push(feature);
        } else {
          // @ts-ignore
          this.features_inactives.push(feature);
        }
      });
    })
  }

}
