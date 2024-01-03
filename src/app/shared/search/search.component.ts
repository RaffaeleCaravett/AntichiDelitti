import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArgumentService } from 'src/app/services/argument.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private argument:ArgumentService) { }
categorieTrovate:any[]=[]
temiTrovati:any[]=[]
tagsTrovati:any[]=[]
luoghiTrovati:any[]=[]
personaggiTrovati:any[]=[]
arrayToShow:any[]=[]


  ngOnInit(): void {
switch(this.data[0]){
  case 'categoria':
    this.argument.searchCategoriaContains(this.data[1]).subscribe((data:any)=>{
      if(data){
        this.categorieTrovate=data
        this.arrayToShow=data
      }
    })
    break;
    case 'luogo':
      this.argument.searchLuogoContains(this.data[1]).subscribe((data:any)=>{
        if(data){
          this.luoghiTrovati=data
          this.arrayToShow=data
        }
      })
      break;
      case 'tema':
        this.argument.searchTemaContains(this.data[1]).subscribe((data:any)=>{
          if(data){
            this.temiTrovati=data
            this.arrayToShow=data
          }
        })
        break;
        case 'tag':
          this.argument.searchTagContains(this.data[1]).subscribe((data:any)=>{
            if(data){
              this.tagsTrovati=data
              this.arrayToShow=data
            }
          })
          break;
          case 'personaggio':
            this.argument.searchPersonaggioContains(this.data[1]).subscribe((data:any)=>{
              if(data){
                this.personaggiTrovati=data
                this.arrayToShow=data
              }
            })
            break;
}
  }
  modify(item:string){
  }
  cancel(item:string){}
}
