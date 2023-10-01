import { Component,Input,OnInit } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  @Input()
  foodPagetags?:string[]
  @Input()
  justifyContent?:String='center'
tags?:Tag[]=[]
  constructor(private fs:FoodService){

  }
  ngOnInit(): void { 
    if(!this.foodPagetags)
    this.tags=this.fs.getAllTag()
  }
}
 