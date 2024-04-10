import { Component,OnInit,ViewChild  } from '@angular/core';
import {ApicallService} from '../apicall.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

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
  imports: [MatPaginator,MatPaginatorModule,MatSort,MatSortModule,MatTableModule,MatInputModule,MatFormFieldModule],
  templateUrl: './list-university.component.html',
  styleUrl: './list-university.component.css'
})
export class ListUniversityComponent {
  constructor(private getApi: ApicallService){}

  universities: University[] = [];

  displayedColumns: string[] = [ 'name', 'country', 'alpha_two_code'];
  dataSource!: MatTableDataSource<University>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(){
    this.getApi.getUniversity().subscribe((data: University[])=>{
      this.universities=data
      this.dataSource = new MatTableDataSource(this.universities);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
