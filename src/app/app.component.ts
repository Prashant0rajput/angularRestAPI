import { Component , OnInit} from '@angular/core';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'RestAPI';

  constructor(private _dataservice: DataService) { }

  public data : any;
  ngOnInit(){
  	
  this._dataservice.getData()
  .subscribe(
  	responseData => {this.data = responseData ; console.log(this.data)});
   
  
  console.log(this.data);
}

 
}