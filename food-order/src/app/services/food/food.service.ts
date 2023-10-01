import { Injectable } from '@angular/core';
import { Tag } from 'src/app/shared/models/Tag';
import { Foods } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Foods{
    return this.getall().find(food=>food.id==id)! ;
  }

  getAllFoodByTag(tag:string):Foods[]{
return tag == 'All'?
 this.getall(): this.getall().filter(food => food.tags?.includes(tag))
  }
getAllTag():Tag[]{
 return [
  {name:'All',count:9},
  {name:'lunch',count:1},
  {name:'poland',count:8},
 
 ]
}

  getall():Foods[]{
    return [
      {
        id:1,
        price:100,
        name:'Chikan Beriany',
        favorite:false,
        star:4,
        tags:['poland'],
        imageUrl:"/assets/img03.jpg",
        cookTime:'1.25hr',
        origins:['Indian']
      },
      {
        id:2,
        price:100,
        name:'Hot Pizza',
        favorite:false,
        star:4,
        tags:['poland'],
        imageUrl:'/assets/img03.jpg',
        cookTime:'0.5hr',
        origins:['Italian']
      },
      {
        id:3,
        price:100,
        name:'Cold Pizza',
        favorite:false,
        star:4,
        tags:['poland'],
        imageUrl:'/assets/img03.jpg',
        cookTime:'0.45hr',
        origins:['Rusian']
      },
      {
        id:4,
        price:100,
        name:'Cockroach Frie',
        favorite:false,
        star:4,
        tags:['poland'],
        imageUrl:'/assets/img03.jpg',
        cookTime:'1.25',
        origins:['Made In China']
      },
      {
        id:5,
        price:100,
        name:'Cockroach Frie',
        favorite:false,
        star:4,
        tags:['poland'],
        imageUrl:'/assets/img03.jpg',
        cookTime:'1.25',
        origins:['slowfood','lunch']
      },
      {
        id:6,
        price:100,
        name:'chikan beriany',
        favorite:false,
        star:4,
        tags:['poland'],
        imageUrl:'/assets/img03.jpg',
        cookTime:'1.25',
        origins:['slowfood','lunch']
      },
      {
        id:7,
        price:100,
        name:'chikan beriany',
        favorite:false,
        star:4,
        tags:['poland'],
        imageUrl:'/assets/img03.jpg',
        cookTime:'1.25',
        origins:['slowfood','lunch']
      },
      {
        id:8,
        price:100,
        name:'chikan beriany',
        favorite:false,
        star:4,
        tags:['lunch'],
        imageUrl:'/assets/img03.jpg',
        cookTime:'1.25',
        origins:['slowfood','lunch']
      },
      {
        id:9,
        price:100,
        name:'chikan beriany',
        favorite:false,
        star:4,
        tags:['poland'],
        imageUrl:'/assets/img03.jpg',
        cookTime:'1.25',
        origins:['slowfood','lunch']
      },
    ]
  }
}
