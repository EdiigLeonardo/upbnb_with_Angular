import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UpbnbService} from "../../service/upbnb.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments: any;

  constructor(private route: ActivatedRoute, private upbnb: UpbnbService) { }

  ngOnInit(): void {
    let id_casa = this.route.snapshot.params['id_casa'];
    this.upbnb.getComments(id_casa).subscribe((comments)=>{
      this.comments = comments;
    })
  }

}
