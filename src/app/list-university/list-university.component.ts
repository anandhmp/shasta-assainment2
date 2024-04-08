import { Component,OnInit  } from '@angular/core';
import {ApicallService} from '../apicall.service';
import { MatPaginator,MatPaginatorModule,PageEvent } from '@angular/material/paginator';

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
  imports: [MatPaginator,MatPaginatorModule],
  templateUrl: './list-university.component.html',
  styleUrl: './list-university.component.css'
})
export class ListUniversityComponent {
  constructor(private getApi: ApicallService){}

  universities: University[] = [];

  pageSize = 10;
  pageIndex = 0;

  ngOnInit(){
    this.getApi.getUniversity().subscribe((data: University[])=>{
      console.log(data)
      this.universities=data
    })
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
  }

  getDisplayedUniversities(): University[] {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.universities.slice(startIndex, endIndex);
  }

}
