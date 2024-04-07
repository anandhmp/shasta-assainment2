import { Component } from '@angular/core';
import {ApicallService} from '../apicall.service'


@Component({
  selector: 'app-list-university',
  standalone: true,
  imports: [],
  templateUrl: './list-university.component.html',
  styleUrl: './list-university.component.css'
})
export class ListUniversityComponent {
  constructor(private getApi: ApicallService){}

  universityArray:[]=[]
  ngOninit(){
    this.getApi.getUniversity().subscribe((data)=>{
      console.log(data)
      this.universityArray=data
    })
  }
}
