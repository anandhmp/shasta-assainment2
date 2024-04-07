import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  
  constructor(private http:HttpClient) { }

  getUniversity() {
    return this.http.get<any>('http://universities.hipolabs.com/search?country=United+States');
    }
}
