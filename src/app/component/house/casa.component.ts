import {Component, Input, OnInit} from '@angular/core';
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {faHeart as faHeartSolid} from "@fortawesome/free-solid-svg-icons";
import {faStar} from "@fortawesome/free-regular-svg-icons";
import {UpbnbService} from "../../service/upbnb.service";

@Component({
  selector: 'app-house',
  templateUrl: './casa.component.html',
  styleUrls: ['./casa.component.scss']
})
export class CasaComponent implements OnInit {

  heart_empty = "assets/heart_open.svg"
  heart_full = "assets/heart_full.svg"
  faHeart = faHeart;
  faHeartSolid = faHeartSolid;
  faStar = faStar;
  @Input() title="";
  @Input() country="";
  @Input() city="";
  @Input() rating="";
  @Input() price="";
  @Input() price_by_night="";
  @Input() host_type="";
  @Input() featured_photo="";
  @Input() id_casa = 0;


  constructor(private upbnb: UpbnbService) {

  }

  ngOnInit(): void {

  }

  toggleFavorite(){
    this.upbnb.toogleFavorite(this.id_casa)
  }

  get favorite(){
    return this.upbnb.isFavorite(this.id_casa)
  }
}
