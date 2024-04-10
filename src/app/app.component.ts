import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddCountryComponent } from './add-country/add-country.component';
import { ListCountryComponent } from './list-country/list-country.component';
import { AddUniversityComponent } from './add-university/add-university.component';
import { ListUniversityComponent } from './list-university/list-university.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryComponent } from './country/country.component';
import { UniversityComponent } from './university/university.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,SidebarComponent,AddCountryComponent,
            ListCountryComponent,AddUniversityComponent,ListUniversityComponent,
            FooterComponent,HttpClientModule,CountryComponent,UniversityComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-exam';
}
