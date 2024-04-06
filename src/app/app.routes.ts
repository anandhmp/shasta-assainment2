import { Routes } from '@angular/router';
import { AddCountryComponent } from './add-country/add-country.component';
import { ListCountryComponent } from './list-country/list-country.component';
import { SidebarComponent } from './sidebar/sidebar.component';

export const routes: Routes = [
    {path:'add-country',  component:AddCountryComponent},
    {path:'list-country', component:ListCountryComponent}
];
