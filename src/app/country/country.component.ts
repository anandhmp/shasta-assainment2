import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [SidebarComponent,RouterOutlet],
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryComponent {

}
