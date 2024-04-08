import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AddUniversityComponent } from '../add-university/add-university.component';
import { ListUniversityComponent } from '../list-university/list-university.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-university',
  standalone: true,
  imports: [SidebarComponent,AddUniversityComponent,ListUniversityComponent,RouterOutlet],
  templateUrl: './university.component.html',
  styleUrl: './university.component.css'
})
export class UniversityComponent {

}
