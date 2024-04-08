import { Component } from '@angular/core';
import { RouterLink,Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private router: Router) {}

  isCountryRoute(): boolean {
    return this.router.url.includes('country');
  }

  isUniversityRoute(): boolean {
    return this.router.url.includes('university');
  }

}
