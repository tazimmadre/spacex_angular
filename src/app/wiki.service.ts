import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WikiService {

  constructor(private http:HttpClient) { }

  public search(){
    return this.http.get('https://api.spacexdata.com/v4/launches/past')
  }
}
