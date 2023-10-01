import { Component,OnInit } from '@angular/core';
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.scss']
})
export class FoodpageComponent implements OnInit {
 food!:Foods
  constructor (private ativatedRoute:ActivatedRoute, private foodservices:FoodService){
    ativatedRoute.params.subscribe((params)=>{
      if(params['id'])
      this.food=foodservices.getFoodById(params['id'])
    })
  }

  ngOnInit(): void {
    
  }
}
