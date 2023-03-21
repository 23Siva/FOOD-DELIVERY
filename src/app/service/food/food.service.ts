import { Injectable } from '@angular/core';
import { foods } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): foods[] {
    return [
      {
        id: 1,
        name: 'Chicken Biryani',
        cooktime: '20-30',
        price: 200,
        favorite: false,
        origins: ['Hyderabad'],
        star: 4.5,
        imageurl: '/assets/biryani1.jpeg',
        tags: ['FastFood', 'Biryani', 'Lunch']

      },
      {
        id: 2,
        name: 'Chicken lolipop',
        cooktime: '20-30',
        price: 200,
        favorite: false,
        origins: ['Hyderabad'],
        star: 4.5,
        imageurl: '/assets/biryani2.jpeg',
        tags: ['FastFood', 'Biryani', 'Lunch']

      },
      {
        id: 3,
        name: 'Veg Burger',
        cooktime: '10-15',
        price: 50,
        favorite: false,
        origins: ['Italy'],
        star: 4.0,
        imageurl: '/assets/bur1.jpeg',
        tags: ['FastFood', 'Burger', 'Lunch']

      },
      {
        id: 4,
        name: 'Chicken Burger',
        cooktime: '20-30',
        price: 100,
        favorite: false,
        origins: ['Italy'],
        star: 4.5,
        imageurl: '/assets/bur2.jpeg',
        tags: ['FastFood', 'Burger', 'Lunch']

      },
      {
        id: 5,
        name: 'Pizza Pepperoni',
        cooktime: '15-20',
        price: 150,
        favorite: false,
        origins: ['London'],
        star: 4.0,
        imageurl: '/assets/img1.jpeg',
        tags: ['FastFood', 'Pizza', 'Lunch']

      },
      {
        id: 6,
        name: 'chicken Pizza',
        cooktime: '15-20',
        price: 200,
        favorite: false,
        origins: ['London'],
        star: 4.0,
        imageurl: '/assets/img2.jpeg',
        tags: ['FastFood', 'Pizza', 'Lunch']

      },
      {
        id: 7,
        name: 'Pepperoni panner Pizza ',
        cooktime: '15-20',
        price: 150,
        favorite: false,
        origins: ['London', 'France'],
        star: 4.5,
        imageurl: '/assets/img3.jpeg',
        tags: ['FastFood', 'Pizza', 'Lunch']

      },
      {
        id: 8,
        name: 'Chicken Soup ',
        cooktime: '10-15',
        price: 100,
        favorite: false,
        origins: ['Norway', 'France'],
        star: 4.5,
        imageurl: '/assets/soup1.jpeg',
        tags: ['FastFood', 'Soup', 'Lunch']

      },
      {
        id: 9,
        name: 'Chicken peper Soup ',
        cooktime: '10-15',
        price: 120,
        favorite: true,
        origins: ['Norway'],
        star: 4.0,
        imageurl: '/assets/soup2.jpeg',
        tags: ['FastFood', 'Soup', 'Lunch']

      },

    ]
  }

}
