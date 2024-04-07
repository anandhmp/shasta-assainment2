import { Component,OnInit  } from '@angular/core';
import {ApicallService} from '../apicall.service'

interface University {
  web_pages: string[];
  domains: string[];
  alpha_two_code: string;
  state_province: string | null;
  country: string;
  name: string;
  id:number;
}


@Component({
  selector: 'app-list-university',
  standalone: true,
  imports: [],
  templateUrl: './list-university.component.html',
  styleUrl: './list-university.component.css'
})
export class ListUniversityComponent {
  constructor(private getApi: ApicallService){}

  universities: University[] = [];

  ngOnInit(){
    this.getApi.getUniversity().subscribe((data: University[])=>{
      console.log(data)
      this.universities=data
    })
  }
}
