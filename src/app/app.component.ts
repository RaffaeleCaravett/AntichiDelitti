import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { RouteGuard } from './core/route.guard';
import { Router } from '@angular/router';
import * as Aos from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'antichidelitti';

constructor(private auth:AuthService,private guard : RouteGuard,private router:Router){}

 ngOnInit(): void {
Aos.init()
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
   this.auth.setToken(data)
   localStorage.setItem('accessToken',data.accessToken)
this.guard.authenticateUser(true)
this.router.navigate(['office'])
    }
  },err=>{
console.log(err)
  })
})
}

  }
}
