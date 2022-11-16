import {Component, Injectable, Input, OnInit} from '@angular/core';
import {UpbnbService} from "../../service/upbnb.service";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {faHeart as faHeartSolid} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  faHeart = faHeart;
  faHeartSolid = faHeartSolid;
  faStar = faStar;

  @Input() title="";
  @Input() country="";
  @Input() city="";
  @Input() rating="";
  @Input() price="";
  @Input() host_type="";
  @Input() featured_photo="";
  @Input() id_casa = 0;
  @Input() casas: any;

  constructor(private upbnb : UpbnbService) { }

  ngOnInit(): void {
  }

  toggleFavorite(){
    this.upbnb.toogleFavorite(this.casas.id)
  }

  get favorite(){
    return this.upbnb.isFavorite(this.casas.id)
  }
}
