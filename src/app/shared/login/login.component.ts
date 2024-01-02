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
    email:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]),
    password:new FormControl('',Validators.required)
  })
}

submit(){
  console.log(this.loginForm.valid)
if(this.loginForm.valid){
this.auth.log(
  {
    email:this.loginForm.controls['email'].value,
    password:this.loginForm.controls['password'].value
  }
).subscribe((data:any)=>{
  console.log(data)
},(err:any)=>{
  console.log(err)
  const dialogRef = this.dialog.open(ErrorsComponent,{
    data:err
  })
  dialogRef.afterClosed().subscribe((data:any)=>{
    console.log(data)
  })
})
}else{
  let err={
    error:{
message:"Stai dimenticando di inserire qualcosa nel form."
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
