import { Component, OnInit } from '@angular/core';

import { HeroesService,Heroe } from '../../services/heroes.services'
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  
  heroes:Heroe[] = [];
  constructor( private _heroesService:HeroesService,
              private router:Router) { 
  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(idx:number){
    console.log(idx);
    this.router.navigate( ['/heroe',idx] );
  }
}
