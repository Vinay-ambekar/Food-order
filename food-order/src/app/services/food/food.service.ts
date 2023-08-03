import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getall():Foods[]{
    return [
      {
        id:1,
        price:100,
        name:'chikan beriany',
        favorite:false,
        star:4,
        tags:['poland'],
        imageUrl:"/assets/img03.jpg",
        cookTime:'1.25',
        origins:['slowfood','lunch']
      },
      {
        id:2,
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
        id:3,
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
        id:4,
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
        id:5,
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
        tags:['poland'],
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
