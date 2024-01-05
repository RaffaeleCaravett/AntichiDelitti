import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArgumentService } from 'src/app/services/argument.service';

@Component({
  selector: 'app-view-bozza',
  templateUrl: './view-bozza.component.html',
  styleUrls: ['./view-bozza.component.scss']
})
export class ViewBozzaComponent implements OnInit{
  selectedCategories:any[]=[]
  selectedThemas:any[]=[]
  selectedTags:any[]=[]
  selectedCharacters:any[]=[]
  categorie:any[]=[]
  temi:any[]=[]
tags:any[]=[]
luoghi:any[]=[]
personaggi:any[]=[]
showModified:boolean=false
showError:boolean=false
  articoloForm!:FormGroup
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private articoloService:ArgumentService) { }


  ngOnInit(): void {
    this.articoloForm=new FormGroup({
      titolo:new FormControl(this.data[0].titolo,Validators.required),
      categoriaList:new FormControl(''),
      temaList:new FormControl(''),
      luogo:new FormControl(this.data[0].luogo?this.data[0].luogo.luogo:''),
      tagList:new FormControl(''),
      testo:new FormControl(this.data[0].testo,Validators.required),
      image:new FormControl(''),
      personaggioList:new FormControl('')
    })

this.selectedCategories=this.data[0].categoriaList
this.selectedCharacters=this.data[0].personaggioList
this.selectedTags=this.data[0].tagList
this.selectedThemas=this.data[0].temaList
this.categorie=this.data[1].categorie
this.temi=this.data[1].temi
this.tags=this.data[1].tags
this.luoghi=this.data[1].luoghi
this.personaggi=this.data[1].personaggi
this.articoloForm.controls['luogo'].setValue(this.data[0].luogo?this.data[0].luogo.id:'')
this.articoloForm.updateValueAndValidity()
  }
  addToSelectedCategories(id:string){
    let item:any
    this.categorie.forEach(c=>{
      if(c.id==Number(id)){
        item=c
      }
    })
    let bool=false
    this.selectedCategories.forEach(c=>{
      if(c.id==item.id){
        bool=true
      }
    })
  if(bool==false){
    this.selectedCategories.push(item)
  }
  }
  addToSelectedThemas(id:string){
    let item:any
    this.temi.forEach(c=>{
      if(c.id==Number(id)){
        item=c
      }
    })
    let bool=false
    this.selectedThemas.forEach(c=>{
      if(c.id==item.id){
        bool=true
      }
    })
  if(bool==false){
    this.selectedThemas.push(item)
  }
  }
  addToSelectedTags(id:string){
    let item:any
    this.tags.forEach(c=>{
      if(c.id==Number(id)){
       item=c
      }
    })
    let bool=false
    this.selectedTags.forEach(c=>{
      if(c.id==item.id){
        bool=true
      }
    })
  if(bool==false){
    this.selectedTags.push(item)
  }
  }
  addToSelectedCharacters(id:string){
    let item:any
    this.personaggi.forEach(c=>{
      if(c.id==Number(id)){
        item=c
      }
    })
    let bool=false
    this.selectedCharacters.forEach(c=>{
      if(c.id==item.id){
        bool=true
      }
    })
  if(bool==false){
    this.selectedCharacters.push(item)
  }
  }
  removeItemFromSelectedCategories(id:number){
  this.selectedCategories=this.selectedCategories.filter(c=>c.id!=id)
  }
  removeItemFromSelectedTags(id:number){
  this.selectedTags=this.selectedTags.filter(c=>c.id!=id)
  }
  removeItemFromSelectedThemas(id:number){
  this.selectedThemas=this.selectedThemas.filter(c=>c.id!=id)
  }
  removeItemFromSelectedCharacters(id:number){
  this.selectedCharacters=this.selectedCharacters.filter(c=>c.id!=id)
  }
modify(){
    let categories :any[]=[];
    let temi:any[]=[];
    let tags:any[]=[];
    let personaggi:any[]=[]
    let immagini:any[]=[]
    for(let i of this.selectedCategories){
    categories.push(i.id)
    }
      for(let i of this.selectedTags){
        tags.push(i.id)
        }
        for(let i of this.selectedThemas){
          temi.push(i.id)
          }
          for(let i of this.selectedCharacters){
            personaggi.push(i.id)
            }

      this.articoloService.putBozza(this.data[0].id,
    {
    titolo:this.articoloForm.controls['titolo'].value,
    testo:this.articoloForm.controls['testo'].value,
    category_id:categories,
    theme_id:temi,
    tag_id:tags,
    luogo_id:this.articoloForm.controls['luogo'].value,
    imageList:immagini,
    personaggio_id:personaggi
    }
      ).subscribe((data:any)=>{
        this.showModified=true
    },err=>{
      this.showError=true
      });
  }
}
