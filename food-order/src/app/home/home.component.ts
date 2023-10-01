import { Component,OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  foods:Foods[]=[] 
constructor(private fs:FoodService, private router:ActivatedRoute){}
ngOnInit(): void {
  this.router.params.subscribe(parmams=>{
    if(parmams['searchItem'])
    this.foods=this.fs.getall().filter(food=>food.name.toLocaleLowerCase().includes(parmams['searchItem'].toLocaleLowerCase()))
   else if(parmams['tag'])
   this.foods=this.fs.getAllFoodByTag(parmams['tag'])
    else
   this.foods=this.fs.getall()
  })
 
}
}
