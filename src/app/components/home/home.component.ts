import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HomeService } from 'src/app/services/home.service';
import { ViewArticleComponent } from 'src/app/shared/view-article/view-article.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
searchForm:any;
currentDate: Date = new Date();
visits:any[]=[]
luoghi:any[]=[]
categoria:any[]=[]
temi:any[]=[]
  currentYear: number = this.currentDate.getFullYear();
  currentMonth: number = this.currentDate.getMonth() + 1;
  currentDay: number = this.currentDate.getDate();
  arguments:any[]=[]
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id', 'titolo', 'luogo', 'tema','category','vedi'];

@ViewChild(MatPaginator) paginator!: MatPaginator;
constructor(private homeService:HomeService,private dialog:MatDialog){}

ngOnInit(): void {
  this.searchForm=new FormGroup({
titolo:new FormControl(''),
localita:new FormControl(''),
tema:new FormControl(''),
categoria:new FormControl(''),
  })

this.homeService.saveVisit({}).subscribe((data:any)=>{})
this.updateDatasource()
this.getAll()
}
search(){}
updateDatasource(page?:number,size?:number,orderBy?:string){

  this.homeService.getAllArticles().subscribe((data:any)=>{
  this.dataSource=data.content
  this.paginator.length=data.content.length
  })
}
vediStoria(articolo:any){
const dialogRef = this.dialog.open(ViewArticleComponent,{data:articolo})
dialogRef.afterClosed().subscribe((data:any)=>{this.updateDatasource(this.paginator.pageIndex,this.paginator.pageSize,'id')})
  }
getAll(){
  this.homeService.getAllCategories().subscribe((data:any)=>{
this.categoria=data
console.log(data)
  })
  this.homeService.getAllTemas().subscribe((data:any)=>{
this.temi=data
console.log(data)
  })
  this.homeService.getAllPlaces().subscribe((data:any)=>{
this.luoghi=data
console.log(data)
  })
}
}
