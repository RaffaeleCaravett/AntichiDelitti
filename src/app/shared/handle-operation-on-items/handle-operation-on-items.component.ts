import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ArgumentService } from 'src/app/services/argument.service';

@Component({
  selector: 'app-handle-operation-on-items',
  templateUrl: './handle-operation-on-items.component.html',
  styleUrls: ['./handle-operation-on-items.component.scss']
})
export class HandleOperationOnItemsComponent implements OnInit{
item:any
makeAThing!:FormGroup
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private argument:ArgumentService,private dialogRef: MatDialogRef<HandleOperationOnItemsComponent>) { }



  ngOnInit(): void {
this.makeAThing=new FormGroup({
  item:new FormControl()
})

this.item= this.data[0]

}

modify(){
switch(this.data[1]){
  case 'categoria':
    this.argument.putCategoria(this.item.id,{category:this.makeAThing.controls['item'].value}).subscribe((data:any)=>{})
 break;
    case 'luogo':
      this.argument.putLuogo(this.item.id,{luogo:this.makeAThing.controls['item'].value}).subscribe((data:any)=>{})
      break;
      case 'tema':
        this.argument.putTema(this.item.id,{thema:this.makeAThing.controls['item'].value}).subscribe((data:any)=>{})
        break;
        case 'tag':
          this.argument.putTag(this.item.id,{tag:this.makeAThing.controls['item'].value}).subscribe((data:any)=>{})
          break;
          case 'personaggio':
            this.argument.putPersonaggio(this.item.id,{avatar:this.makeAThing.controls['item'].value}).subscribe((data:any)=>{})
            break;
}
this.close()
}

cancel(){
switch(this.data[1]){
  case 'categoria':
    this.argument.deleteCategoria(this.item.id).subscribe((data:any)=>{})
    break;
    case 'luogo':
      this.argument.deleteLuogo(this.item.id).subscribe((data:any)=>{})
      break;
      case 'tema':
        this.argument.deleteTema(this.item.id).subscribe((data:any)=>{})
        break;
        case 'tag':
            this.argument.deleteTag(this.item.id).subscribe((data:any)=>{})
          break;
          case 'personaggio':
            this.argument.deletePersonaggio(this.item.id).subscribe((data:any)=>{})
            break;
}
this.close()
}

close(){
  this.dialogRef.close()
}
}
