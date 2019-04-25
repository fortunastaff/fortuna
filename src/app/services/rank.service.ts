import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers } from "@angular/http";
import { Rank  } from "../interfaces/rank.interface";

import { $ } from 'protractor';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RankService {
  ranking: any [] = [];

  //declare URL for short code
  fireURL:string ="https://msfortuna-131290.firebaseio.com/Fortuna.json"
  rankuURL:string ="https://msfortuna-131290.firebaseio.com/Fortuna/"

  constructor(private httpc: HttpClient , private http:Http ) { 
  }
  nuevoRank(rank:Rank){
    let body = JSON.stringify(rank);
    let headers = new Headers ({
      'Content-Type': 'application/json'
     });

     //start the post to the db
    return this.http.post( this.fireURL , body, {headers} )
      .pipe(map( res => {
          console.log(res.json());
          return res.json();
      }))
  }

  refreshRank(rank:Rank , key$:string ){
    let body = JSON.stringify(rank);
    let headers = new Headers ({
      'Content-Type': 'application/json'
     });

       let url =`${this.rankuURL}/${key$}.json`;
    return this.http.put( url , body, {headers} )
      .pipe(map( res => {
          console.log(res.json());
          return res.json();
      }))
  }

  getNewRank(termino :string){

    console.log('Rank service');
    return this.httpc.get(`https://pinkbean.xyz/api/rank/eu/${termino}/overall/`);
   
    }
 
}
