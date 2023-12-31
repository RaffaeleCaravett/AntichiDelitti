import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.scss']
})
export class OfficeComponent implements OnInit{

daFare:string='aggiungiStoria';
fontSizee:string='fs-1'
fontWeight:boolean=false
fontStyle:boolean=false
textAlign:string='start'
articoloForm!:FormGroup


ngOnInit(): void {
this.articoloForm=new FormGroup({
  titolo:new FormControl('',Validators.required),
  categoria:new FormControl(''),
  tag:new FormControl(''),
  testo:new FormControl('',Validators.required),
  image:new FormControl(''),

})
}
}
