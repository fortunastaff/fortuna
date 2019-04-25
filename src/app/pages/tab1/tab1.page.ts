import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RankService } from '../../services/rank.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})

export class Tab1Page  {
  ranking: any []; 
  constructor( private router:Router, private rank: RankService) { }

  
  openDetailsInTab(){
    this.router.navigateByUrl('/tabs/tab1/details ');
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
