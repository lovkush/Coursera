import { Routes } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { DishDetailsComponent } from '../dish-details/dish-details.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'menu',     component: MenuComponent },
  { path: 'dishdetail/:id', component: DishDetailsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'contactus',     component: ContactComponent },
];