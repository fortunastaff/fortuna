import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Rank } from '../../interfaces/rank.interface';
import { RankService } from '../../services/rank.service';



@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.scss'],
})
export class RankComponent implements OnInit {
  rank:Rank = {
    nombre:"",
    bio:"",
    guild:"fortuna",
  }
   
  new:boolean = false;
  id:string;

  constructor( private _rankService: RankService, private router:Router , private route:ActivatedRoute ) { 
    this.route.params
      .subscribe( parametros=>{
        console.log(parametros);
        this.id= parametros['id'];

        
      })
  }

  ngOnInit() {}
  guardar(){
    console.log(this.rank);

    if( this.id == "nuevo"){
      //insert
      this._rankService.nuevoRank( this.rank)
      .subscribe(data =>{
          this.router.navigate(['/rank', data.name])
      },
      error=> console.error(error));
    }
    else{
      //update
      this._rankService.refreshRank( this.rank , this.id)
      .subscribe(data =>{
          console.log(data);
      },
      error=> console.error(error));
    }
    
  }

}
