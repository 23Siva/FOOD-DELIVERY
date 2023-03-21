import { Component, OnInit } from '@angular/core';
import { FoodService } from '../service/food/food.service';
import { foods } from '../shared/models/food';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foods: foods[] = [];
  constructor(private fs: FoodService) { }

  ngOnInit(): void {
    this.foods = this.fs.getAll();
  }
}
