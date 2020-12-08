import { Component, OnInit } from '@angular/core';
import { Boli } from '../boli';
import { BoliService } from '../boli.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  bolis:Boli[]
  essays:Boli[]
  stories:Boli[]
  letters:Boli[]
  prasangs:Boli[]
  samvads:Boli[]

  public items: any = []

  constructor(
    private boliService:BoliService
  ) {}

  ngOnInit(){
    this.boliService.getStore()
    this.bolis = this.boliService.getBolis()
    this.essays = this.bolis.filter((x)=>{
      return x.type==='निबंध'
    })
    this.stories = this.bolis.filter((x)=>{
      return x.type==='कथा लेखन '
    })
    this.letters = this.bolis.filter((x)=>{
      return x.type==='पत्रलेखन'
    })
    this.prasangs = this.bolis.filter((x)=>{
      return x.type==='प्रसंग'
    })
    this.samvads = this.bolis.filter((x)=>{
      return x.type==='संवाद लेखन '
    })

    this.items = [
      { 
        expanded: false,
        title : 'निबंध' 
      },
      {
        expanded: false,
        title: 'कथा लेखन '
      },
      {
        expanded: false,
        title : 'पत्रलेखन'
      },
      {
        expanded: false,
        title: 'प्रसंग'
      },
      {
        expanded: false,
        title: 'संवाद लेखन '
      }
    ]
  }

  expandItem(item):void{
    if (item.expanded){
      item.expanded = false
    }else{
      this.items.map(listItem => {
        if(item == listItem){
          listItem.expanded = !listItem.expanded;
        }else{
          listItem.expanded = false
        }
        return listItem
      })
    }
  }

}
