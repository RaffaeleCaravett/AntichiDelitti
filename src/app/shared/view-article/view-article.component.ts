import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArgumentService } from 'src/app/services/argument.service';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.scss']
})
export class ViewArticleComponent implements OnInit{

  articoloForm!:FormGroup
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private articoloService:ArgumentService) { }


  ngOnInit(): void {
    this.articoloForm=new FormGroup({
      titolo:new FormControl(this.data.titolo,Validators.required),
      testo:new FormControl(this.data.testo,Validators.required),
    })
  }

}

