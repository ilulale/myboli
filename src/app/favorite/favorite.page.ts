import { Component, OnInit } from '@angular/core';
import { Boli } from '../boli';
import { BoliService } from '../boli.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {

  bolis:Boli[]
  favorites:Boli[]

  constructor(
    private boliService:BoliService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((val)=>{
      this.bolis = this.boliService.getBolis()
      this.favorites = this.bolis.filter((x)=>{
        return x.favorite===true
      })
    })

  }

}
