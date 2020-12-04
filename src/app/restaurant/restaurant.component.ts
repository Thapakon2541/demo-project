import { Component, Input } from '@angular/core';
import { Food } from './shared/food.model';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent   {
    
  food:Food[]=[]
  createLogFood(foods){
    this.food.push(foods)
  }
}
