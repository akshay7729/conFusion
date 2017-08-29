import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'; 
import { DishService } from '../services/dish.service';

import 'rxjs/add/operator/switchmap';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  @Input()
  dish:Dish;
  dishcopy: null;
  dishIds : number[];
  prev: number;
  next: number;


  constructor(private dishervice: DishService,
              private route:ActivatedRoute,
              private location:Location) { }

  ngOnInit() {
  	this.dishervice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
  	this.route.params
  	.switchMap((params : Params) => this.dishervice.getDish(+params['id']))
  	.subscribe(dish => {this.dish = dish; this.dishcopy = dish; this.setPrevNext(dish.id)});
  }

  setPrevNext(dishId : number){
  	let index = this.dishIds.indexOf(dishId);
  	this.prev = this.dishIds[(this.dishIds.length + index - 1)%this.dishIds.length];
  	this.next = this.dishIds[(this.dishIds.length + index + 1)%this.dishIds.length];
  }

}
