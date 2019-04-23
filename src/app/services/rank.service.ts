import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { $ } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class RankService {
  ranking: any [] = [];

  constructor(private http: HttpClient) { 
  }
  getNewRank(termino :string){

    console.log('Rank service');
    return this.http.get(`https://pinkbean.xyz/api/rank/eu/${termino}/overall/`);
   
    }
 
}
