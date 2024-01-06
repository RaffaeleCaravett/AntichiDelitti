import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

private visit='/api/visit'
private articles=this.visit+'/articles'
private categories=this.visit+'/categories'
private places=this.visit+'/places'
private themas=this.visit+'/themas'

constructor(private http:HttpClient) { }

  saveVisit(body:any){
return this.http.post(environment.API_URL+this.visit,body)
  }
  getAllVisit(){
    return this.http.get(environment.API_URL+this.visit)
  }
  getAllArticles(){
    return this.http.get(environment.API_URL+this.articles)
  }
  getAllTemas(){
    return this.http.get(environment.API_URL+this.themas)
  }
  getAllCategories(){
    return this.http.get(environment.API_URL+this.categories)
  }
  getAllPlaces(){
    return this.http.get(environment.API_URL+this.places)
  }
}
