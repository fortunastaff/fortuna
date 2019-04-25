import { Component, OnInit } from '@angular/core';
import { RankService } from '../../services/rank.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent  {

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