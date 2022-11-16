import {Component, Input, OnInit} from '@angular/core';
import {faStar} from "@fortawesome/free-regular-svg-icons";
import {UpbnbService} from "../../service/upbnb.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {
  host_desc = 'Sou um jovem empreendedor que adora viajar!!!\n'+
    '\n'+
    'Eu moro em Lisboa e tenho dois filhos com 9 e 5 anos de\n'+
    'idade e adoro passar muito tempo com eles'

  heart_empty = "assets/heart_open.svg"
  heart_full = "assets/heart_full.svg"
  faStar = faStar;
  house: any;
  photo: any;
  host: any;


  constructor(private route: ActivatedRoute, private upbnb : UpbnbService) { }
  //só para poder ser chamado fora do ngOnInit:
  id_casa = this.route.snapshot.params['id_casa'];
  ngOnInit(): void {
    let id_casa = this.route.snapshot.params['id_casa'];

    //getHouse
    this.upbnb.getHouse(id_casa).subscribe((houses)=>{
      this.house = houses;
    })

    //getPhotos
    this.upbnb.getPhotos(id_casa).subscribe((photo)=>{
      this.photo = photo;
    })

    //getHost
    this.upbnb.getHost(id_casa).subscribe((host)=>{
      this.host = host;
    })

  }

  toggleFavorite(){
    this.upbnb.toogleFavorite(this.id_casa)
  }

  get favorite(){
    return this.upbnb.isFavorite(this.id_casa)
  }
}
