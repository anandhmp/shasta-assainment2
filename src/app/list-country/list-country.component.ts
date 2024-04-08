import { Component,ViewChild, inject } from '@angular/core';
import {countries}  from '../../assets/countries.json';
import { MatPaginator,MatPaginatorModule } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list-country',
  standalone: true,
  imports: [MatPaginator,MatPaginatorModule],
  templateUrl: './list-country.component.html',
  styleUrl: './list-country.component.css'
})
export class ListCountryComponent {
countries = countries;

pageIndex = 0;
pageSize = 10;

onPageChange(event: PageEvent) {
  this.pageIndex = event.pageIndex;
}

getDisplayedCountries(): any[] {
  const startIndex = this.pageIndex * this.pageSize;
  const endIndex = startIndex + this.pageSize;
  return this.countries.slice(startIndex, endIndex);
}


}
