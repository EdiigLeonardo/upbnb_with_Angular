import {Component, OnInit} from '@angular/core';
import {UpbnbService} from "../../service/upbnb.service";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favorites: any;
  grouped: any = {}
  keys__: any = [];

  constructor(private upbnb: UpbnbService) {
  }

  ngOnInit(): void {
    this.upbnb.getFavorites().subscribe((favorite) => {

      let store = this.upbnb.readStore()
      if(store.length>0){
        this.favorites = <any[]>favorite;
        // @ts-ignore
        this.favorites.data.forEach(c => {
          if (!this.grouped[c.country])
            this.grouped[c.country] = [];
          this.grouped[c.country].push(c);
        });
        Object.keys(this.grouped).forEach((key) => {
          this.keys__.push(key);
        })
      }

      // TODO agrupar por país
    })
  }
}
