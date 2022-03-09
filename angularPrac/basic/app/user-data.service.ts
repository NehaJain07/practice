import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
   url='/assets/data/user.json'
  constructor(private http: HttpClient) { }
  getUser(){
    return this.http.get(this.url)
  }
 /*  saveUser(data:any){
    return this.http.post(this.url, data)
  } */
}
