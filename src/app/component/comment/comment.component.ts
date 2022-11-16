import { Component, OnInit, Input } from '@angular/core';
import {UpbnbService} from "../../service/upbnb.service";
import {ActivatedRoute} from "@angular/router";
import {faStar} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() user_name = "";
  @Input() date = "";
  @Input() description = "";
  @Input() data = "";
  @Input() pontuation = "";
  @Input() image = "";
  @Input() type = "";
  faStar = faStar;
  comments: any;

  constructor(private route: ActivatedRoute, private upbnb: UpbnbService) { }

  ngOnInit(): void {
    let id_casa = this.route.snapshot.params['id_casa'];
    this.upbnb.getComments(id_casa).subscribe((comments)=>{
      this.comments = comments;
  })
  }
}
