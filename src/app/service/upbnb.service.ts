import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";



const BASE_URL = "https://m9-frontend.upskill.appx.pt/upbnb";



@Injectable({
  providedIn: 'root'
})




export class UpbnbService {
  casas: any;

  // @ts-ignore
  getStore = JSON.parse(localStorage.getItem("UPBNB_Favorites"));

  favorites: number[] = this.readStore();


  constructor(private http: HttpClient) {
  }

  getComments(id_casa: number) {
    return this.http.get(BASE_URL + "/casas/" + id_casa + "/reviews");
  }

  getCasas() {
    return this.http.get(BASE_URL + "/casas?limit=50");
  }

  getHouse(id_casa: number) {
    return this.http.get(BASE_URL + "/casas/" + id_casa);
  }


  getFavorites() {
    return this.http.get(BASE_URL + "/casas?page=1&limit=50&ids=" + this.favorites.join(","));
  }

  toogleFavorite(id_casas: number) {
    if (!this.isFavorite(id_casas)) {
      this.favorites.push(id_casas)
      this.readStore()
      localStorage.setItem("UPBNB_Favorites", JSON.stringify(this.favorites))
    } else {
      let index = this.favorites.indexOf(id_casas)
      // @ts-ignore
      this.favorites.splice(index, 1)
      this.readStore()
      localStorage.setItem("UPBNB_Favorites", JSON.stringify(this.favorites))
    }
  }

  isFavorite(id_casas: number): boolean {
    //console.log("app-upbnb-service: ",this.favoritos)
    return this.favorites.includes(id_casas);
  }

  get id_casa() {
    let casas = this.getCasas()
    return this.casas.data.id
  }

  getActualBooking() {
    return this.http.get(BASE_URL + "/casas/current");
  }

  getPastBooking() {
    return this.http.get(BASE_URL + "/casas/past");
  }

  getFeatures(id_casa: number) {
    return this.http.get(BASE_URL + "/casas/" + id_casa + "/features");
  }

  getHost(id_casa: number) {
    return this.http.get(BASE_URL + "/casas/" + id_casa + "/host");
  }

  getPhotos(id_casa: number) {
    return this.http.get(BASE_URL + "/casas/" + id_casa + "/photos");
  }

  readStore(){
    // @ts-ignore
    let store = JSON.parse(localStorage.getItem("UPBNB_Favorites"));
    if(store !== null){
      return store;
    }
    return []
  }
}
