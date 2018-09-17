import { Component, OnInit } from '@angular/core';

import { Params , ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.scss']
})
export class DishDetailsComponent implements OnInit {
 
  dish: Dish;

  constructor( private dishservice: DishService,
    private location : Location,
    private route: ActivatedRoute) { }

    ngOnInit() {
      const id = +this.route.snapshot.params['id'];
      this.dishservice.getDish(id)
      .then(dish => this.dish = dish);
    }
  
    goBack(): void {
      this.location.back();
    }

}
 