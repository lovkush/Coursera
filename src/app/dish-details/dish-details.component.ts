import { Component, OnInit } from '@angular/core';

import { Params , ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.scss']
})
export class DishDetailsComponent implements OnInit {
 
  dish : Dish;
  dishIds : number[];
  prev : number;
  next : number;  

  constructor( private dishservice: DishService,
    private location : Location,
    private route: ActivatedRoute) { }

    ngOnInit() {
      this.dishservice.getDishIds()
        .subscribe(dishIds => this.dishIds = dishIds);
      this.route.params.pipe(
        switchMap((params : Params) => this.dishservice.getDish(+params['id'])))
        .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id)});
    }

    setPrevNext(dishId : number){
      let index = this.dishIds.indexOf(dishId);
      this.prev = this.dishIds[(this.dishIds.length + index -1 )% this.dishIds.length];
      this.next = this.dishIds[(this.dishIds.length + index +1 )% this.dishIds.length];
    }
  
    goBack(): void {
      this.location.back();
    }

}
 