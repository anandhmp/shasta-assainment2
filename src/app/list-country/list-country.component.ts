import { Component,ViewChild, inject } from '@angular/core';
import {countries}  from '../../assets/countries.json';


@Component({
  selector: 'app-list-country',
  standalone: true,
  imports: [],
  templateUrl: './list-country.component.html',
  styleUrl: './list-country.component.css'
})
export class ListCountryComponent {
countries = countries;


}
