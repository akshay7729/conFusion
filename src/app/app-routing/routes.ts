import { Routes } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import { HomeComponent } from '../home/home.component';
import { FoodsComponent } from '../foods/foods.component';
import { RestaurantsComponent } from '../restaurants/restaurants.component';

export const routes:Routes = [
	{path: 'home', component: HomeComponent},
	{path: 'foods', component: FoodsComponent},
	{path: 'menu', component: MenuComponent},
	{path: 'restaurants', component: RestaurantsComponent},
	{path: '', redirectTo: '/home', pathMatch:'full'}
];