import { Routes } from '@angular/router';
import {About} from './about/about';
import {Home} from './home/home';
import {Amenities} from './amenities/amenities';
import {Contacts} from './contact/contacts';
import {Services} from './services/services';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'amenities', component: Amenities },
  { path: 'contact-us', component: Contacts },
  { path: 'services', component: Services }
];
