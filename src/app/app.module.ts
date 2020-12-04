import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { UserComponent } from './restaurant/user/user.component';
import { FoodComponent } from './restaurant/food/food.component';
import { FoodListComponent } from './restaurant/food-list/food-list.component';
import { FoodDetialComponent } from './restaurant/food-detial/food-detial.component';
import { FormsModule } from '@angular/forms';
const routes:Routes =[
  {path:'food-detail/:id',component:FoodListComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    UserComponent,
    FoodComponent,
    FoodListComponent,
    FoodDetialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    // RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
