import { Component, OnInit } from '@angular/core';
import { BoliService } from '../boli.service';
import { ActivatedRoute } from '@angular/router';
import { Boli } from '../boli';

@Component({
  selector: 'app-boli-details',
  templateUrl: './boli-details.page.html',
  styleUrls: ['./boli-details.page.scss'],
})
export class BoliDetailsPage implements OnInit {

  loadedBoli:Boli
  boliID:string

  constructor(
    private boliService:BoliService,
    private actvatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    this.actvatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('boliId')){
        return
      }
      this.boliID = paramMap.get('boliId')
      this.loadedBoli = this.boliService.getBoli(this.boliID)
    })
  }

  toggledFav(){
    console.log('clicked')
    this.boliService.toggleFav(this.boliID)
    this.boliService.getStore()
  }

}
