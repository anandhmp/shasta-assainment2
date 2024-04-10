import { AfterViewInit,Component,ViewChild } from '@angular/core';
import {countries}  from '../../assets/countries.json';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


 interface Country{
  name:string;
  phoneCode:number;
  sortname:string;
  id:number;
}

@Component({
  selector: 'app-list-country',
  standalone: true,
  imports: [MatPaginator,MatPaginatorModule,MatSort,MatSortModule,MatTableModule,MatInputModule,MatFormFieldModule],
  templateUrl: './list-country.component.html',
  styleUrl: './list-country.component.css'
})
export class ListCountryComponent {

countries: Country[] = countries;
displayedColumns: string[] = ['name', 'phoneCode', 'sortname'];
dataSource!: MatTableDataSource<Country>;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.countries);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
