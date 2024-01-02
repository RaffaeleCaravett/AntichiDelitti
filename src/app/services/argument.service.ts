import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArgumentService {

private categoria='/categoria'
private luogo ='/luogo'
private tema = '/tema'
private tag = '/tag'
  constructor(private http:HttpClient) { }

  saveCategoria(body:any){
return this.http.post(environment.API_URL+this.categoria,body)
  }
  deleteCategoria(id:number){
    return this.http.delete(environment.API_URL+this.categoria+'/'+id)
  }
  putCategoria(id:number,body:any){
    return this.http.put(environment.API_URL+this.categoria+'/'+id,body)
  }
  getAllCategoria(){
    return this.http.get(environment.API_URL+this.categoria)
  }

  saveTag(body:any){
    return this.http.post(environment.API_URL+this.tag,body)
      }
      deleteTag(id:number){
        return this.http.delete(environment.API_URL+this.tag+'/'+id)
      }
      putTag(id:number,body:any){
        return this.http.put(environment.API_URL+this.tag+'/'+id,body)
      }
      getAllTag(){
        return this.http.get(environment.API_URL+this.tag)
      }

  saveTema(body:any){
    console.log(body)
    return this.http.post(environment.API_URL+this.tema,body)
      }
      deleteTema(id:number){
        return this.http.delete(environment.API_URL+this.tema+'/'+id)
      }
      putTema(id:number,body:any){
        return this.http.put(environment.API_URL+this.tema+'/'+id,body)
      }
      getAllTema(){
        return this.http.get(environment.API_URL+this.tema)
      }

  saveLuogo(body:any){
    return this.http.post(environment.API_URL+this.luogo,body)
      }
      deleteLuogo(id:number){
        return this.http.delete(environment.API_URL+this.luogo+'/'+id)
      }
      putLuogo(id:number,body:any){
        return this.http.put(environment.API_URL+this.luogo+'/'+id,body)
      }
      getAllLuogo(){
        return this.http.get(environment.API_URL+this.luogo)
      }


}
