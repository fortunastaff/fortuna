import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RankService } from '../services/rank.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  ranking: any []; 
  

  constructor ( private rank: RankService ){
  console.log ('constructor log ');
  

  
 
}
search(termino: string){
  console.log(termino)
  this.rank.getNewRank(termino)
    .subscribe((data : any)=>{
      console.log(data);
      this.ranking = data;
    });
}
}