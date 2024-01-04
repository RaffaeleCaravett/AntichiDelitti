import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArgumentService } from 'src/app/services/argument.service';

@Component({
  selector: 'app-handle-operation-on-items',
  templateUrl: './handle-operation-on-items.component.html',
  styleUrls: ['./handle-operation-on-items.component.scss']
})
export class HandleOperationOnItemsComponent implements OnInit{
item:any
makeAThing!:FormGroup
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private argument:ArgumentService) { }



  ngOnInit(): void {
this.makeAThing=new FormGroup({
  item:new FormControl()
})

this.item= this.data[0]

}

}
