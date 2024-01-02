import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { ErrorsComponent } from '../errors/errors.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

loginForm!:FormGroup

constructor(private auth:AuthService,private dialog:MatDialog){}

ngOnInit(): void {
  this.loginForm=new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })
}

submit(){
if(this.loginForm.valid){
this.auth.log(
  {
    email:this.loginForm.controls['email'].value,
    password:this.loginForm.controls['password'].value
  }
).subscribe((data:any)=>{
  console.log(data)
})
}else{
  let err={
    error:{
message:"Stai dimenticando di inserire qualcosa nel form"
    }
  }
const dialogRef = this.dialog.open(ErrorsComponent,{
  data:err
})
dialogRef.afterClosed().subscribe((data:any)=>{
  console.log(data)
})
}
}
}
