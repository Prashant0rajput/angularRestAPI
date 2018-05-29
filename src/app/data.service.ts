import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Http, Response} from '@angular/http';
import { Observable , of } from 'rxjs';
import {Data} from './data';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private url:string = "https://swaniti-test.herokuapp.com/swanititest?Block=Basta%20Block&GramPanchayat=Gadapada&VillageName=Jamunia";


  getData(): Observable<Data[]> {
return this.http.get<Data[]>(this.url);
 
}

}