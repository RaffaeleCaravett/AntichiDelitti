import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { RouteGuard } from './core/route.guard';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'antichidelitti';

constructor(private auth:AuthService,private guard : RouteGuard,private router:Router){}

 ngOnInit(): void {

if(localStorage.getItem('accessToken')&&localStorage.getItem('refreshToken')){
this.auth.verifyToken(localStorage.getItem('accessToken')!).subscribe((data:any)=>{
  if(data){
    this.auth.setToken(localStorage.getItem('accessToken')!)
this.guard.authenticateUser(true)
this.router.navigate(['office'])
localStorage.setItem('user',JSON.stringify(data))
  }
},err=>{
  this.auth.verifyRefreshToken(localStorage.getItem('refreshToken')!).subscribe((data:any)=>{
    if(data){
      this.auth.setRefreshToken(localStorage.getItem('refreshToken')!)
this.guard.authenticateUser(true)
this.router.navigate(['office'])
localStorage.setItem('user',JSON.stringify(data))
    }
  },err=>{
console.log(err)
  })
})
}

  }
}
