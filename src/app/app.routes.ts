import { Routes } from '@angular/router';
import { AddCountryComponent } from './add-country/add-country.component';
import { ListCountryComponent } from './list-country/list-country.component';
import { AddUniversityComponent } from './add-university/add-university.component';
import { ListUniversityComponent } from './list-university/list-university.component';

export const routes: Routes = [
    { path: 'add-country', component: AddCountryComponent },
    { path: 'list-country', component: ListCountryComponent },
    { path: 'add-university', component: AddUniversityComponent },
    { path: 'list-university', component: ListUniversityComponent }
];
