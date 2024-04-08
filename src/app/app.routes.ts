import { Routes } from '@angular/router';
import { AddCountryComponent } from './add-country/add-country.component';
import { ListCountryComponent } from './list-country/list-country.component';
import { AddUniversityComponent } from './add-university/add-university.component';
import { ListUniversityComponent } from './list-university/list-university.component';
import { CountryComponent } from './country/country.component';
import { UniversityComponent } from './university/university.component';


export const routes: Routes = [
    { path: '', redirectTo: '/country', pathMatch: 'full' },
    { path: 'country', component: CountryComponent,children: [
        { path: '', redirectTo: 'add-country', pathMatch: 'full' },
        { path: 'add-country', component: AddCountryComponent }
      ]
  },
    { path: 'university', component: UniversityComponent,children: [
        { path: '', redirectTo: 'add-university', pathMatch: 'full' },
        { path: 'add-university', component: AddUniversityComponent }
      ]
  },
    { path: 'add-country', component: AddCountryComponent },
    { path: 'list-country', component: ListCountryComponent },
    { path: 'add-university', component: AddUniversityComponent },
    { path: 'list-university', component: ListUniversityComponent }
];
