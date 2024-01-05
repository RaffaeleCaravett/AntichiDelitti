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
private personaggio = '/personaggio'
private articolo = '/articolo'
private bozza = '/bozza'
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

      savePersonaggio(body:any){
        return this.http.post(environment.API_URL+this.personaggio,body)
          }
          deletePersonaggio(id:number){
            return this.http.delete(environment.API_URL+this.personaggio+'/'+id)
          }
          putPersonaggio(id:number,body:any){
            return this.http.put(environment.API_URL+this.personaggio+'/'+id,body)
          }
          getAllPersonaggio(){
            return this.http.get(environment.API_URL+this.personaggio)
          }
          saveArticolo(body:any){
            return this.http.post(environment.API_URL+this.articolo,body)
              }
              deleteArticolo(id:number){
                return this.http.delete(environment.API_URL+this.articolo+'/'+id)
              }
              putArticolo(id:number,body:any){
                return this.http.put(environment.API_URL+this.articolo+'/'+id,body)
              }
              getAllArticolo(page:number,size:number,orderBy:string){
                const url = `${environment.API_URL}${this.articolo}?page=${page||0}&size=${size||5}&orderBy=${orderBy||'id'}`;
                return this.http.get(url)
              }

              saveBozza(body:any){
                return this.http.post(environment.API_URL+this.bozza,body)
                  }
                  deleteBozza(id:number){
                    return this.http.delete(environment.API_URL+this.bozza+'/'+id)
                  }
                  putBozza(id:number,body:any){
                    return this.http.put(environment.API_URL+this.bozza+'/'+id,body)
                  }
                  getAllBozza(page:number,size:number,orderBy:string){
                    const url = `${environment.API_URL}${this.bozza}?page=${page||0}&size=${size||5}&orderBy=${orderBy||'id'}`;
                    return this.http.get(environment.API_URL+this.bozza)
                  }
searchCategoriaContains(categoria:string){
return this.http.get(environment.API_URL+this.categoria+'/'+categoria)
}
searchCategoria(categoria:string){
return this.http.get(environment.API_URL+this.categoria+'/'+categoria)
}
searchTagContains(tag:string){
return this.http.get(environment.API_URL+this.tag+'/'+tag)
}
searchTag(tag:string){
return this.http.get(environment.API_URL+this.tag+'/'+tag)
}
searchTemaContains(tema:string){
return this.http.get(environment.API_URL+this.tema+'/'+tema)
}
searchTema(tema:string){
return this.http.get(environment.API_URL+this.tema+'/'+tema)
}
searchLuogoContains(luogo:string){
return this.http.get(environment.API_URL+this.luogo+'/'+luogo)
}
searchLuogo(luogo:string){
return this.http.get(environment.API_URL+this.luogo+'/'+luogo)
}
searchPersonaggioContains(alias:string){
return this.http.get(environment.API_URL+this.personaggio+'/'+alias)
}
searchPersonaggio(alias:string){
return this.http.get(environment.API_URL+this.personaggio+'/'+alias)
}


}
