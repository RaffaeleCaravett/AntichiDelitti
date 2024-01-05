import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArgumentService } from 'src/app/services/argument.service';

@Component({
  selector: 'app-view-articolo',
  templateUrl: './view-articolo.component.html',
  styleUrls: ['./view-articolo.component.scss']
})
export class ViewArticoloComponent implements OnInit{
  selectedCategories:any[]=[]
  selectedThemas:any[]=[]
  selectedTags:any[]=[]
  selectedCharacters:any[]=[]
  categorie:any[]=[]
  temi:any[]=[]
tags:any[]=[]
luoghi:any[]=[]
personaggi:any[]=[]
  articoloForm!:FormGroup
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private articoloService:ArgumentService) { }


  ngOnInit(): void {
    this.articoloForm=new FormGroup({
      titolo:new FormControl(this.data[0].titolo,Validators.required),
      categoriaList:new FormControl(''),
      temaList:new FormControl(''),
      luogo:new FormControl(this.data[0].luogo.luogo),
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
this.articoloForm.controls['luogo'].setValue(this.data[0].luogo.id)
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
modify(){}
}
