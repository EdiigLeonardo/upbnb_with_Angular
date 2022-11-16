import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UpbnbService} from "../../service/upbnb.service";

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.scss']
})
export class GalleriesComponent implements OnInit {
  photos : any;
  photo_list : [] = [];
  //months.splice(1)

  constructor(private route: ActivatedRoute, private upbnb: UpbnbService) { }

  ngOnInit(): void {
    let id_casa = this.route.snapshot.params['id_casa'];
    this.upbnb.getPhotos(id_casa).subscribe((photos)=>{
      this.photos = photos;
      this.photo_list = this.photos.photos.splice(1);
      console.log(this.photo_list)
    })
  }

}
