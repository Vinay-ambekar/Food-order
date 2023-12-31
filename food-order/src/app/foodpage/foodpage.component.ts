import { Component,OnInit } from '@angular/core';
import { Foods } from '../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.scss']
})
export class FoodpageComponent implements OnInit {
 food!:Foods
  constructor (private ativatedRoute:ActivatedRoute, 
    private foodservices:FoodService, 
    private cartService:CartService,
    private router:Router ){
    ativatedRoute.params.subscribe((params)=>{
      if(params['id'])
      this.food=foodservices.getFoodById(params['id'])
    })
  }

  ngOnInit(): void {
    
  }
  addTocart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page')
  }
}
