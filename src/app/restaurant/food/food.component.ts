import { Food } from './../shared/food.model';
import { Component, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent  {
  food:Food  =new Food();
  @Output() foodList = new EventEmitter();

  createLogFood(){
    this.foodList.emit(this.food)
  }

}
