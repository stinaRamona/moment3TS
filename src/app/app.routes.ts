import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConvertComponent } from './convert/convert.component';
import { AboutComponent } from './about/about.component';

//routing för undersidorna
export const routes: Routes = [ 
    { path: 'home', component: HomeComponent}, 
    { path: 'convert', component: ConvertComponent}, 
    { path: 'about', component: AboutComponent}, 
    { path: '', redirectTo: '/home', pathMatch: 'full'} 
];
