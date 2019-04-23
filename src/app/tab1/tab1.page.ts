import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
    ranking: any [] = [];

  constructor ( private http: HttpClient ){
  console.log ('constructor log ');
  this.http.get('https://pinkbean.xyz/api/rank/eu/xpanquesin/overall/')
    .subscribe( (resp: any) => {
      this.ranking = resp;
      console.log (resp);
     })
  
}
}