import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent  {
  

  constructor(private activatedRoute:ActivatedRoute) {

    this.activatedRoute.params.subscribe( params =>{
        console.log(params['id'])
      } 
    ) 

   }


}
