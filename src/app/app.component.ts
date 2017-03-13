import { Component, OnInit } from '@angular/core';
import { FilterNumberPipe } from './app.pipe';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  datos: Object;
  errorMessage = null;
  rank: Object;
  today: Date;

  constructor(
    private appService:AppService
  ){}

  getDatos(): void{
    this.appService.getData().subscribe(result => {
                                              this.datos = result;
                                              console.log(this.datos);
                                              this.formatDay(result);
                                              this.rank = result.last.odds;
                                            },
                                            error => {
                                              this.errorMessage = <any>error;
                                             
                                            if(this.errorMessage !== null){
                                                console.log(this.errorMessage);
                                                alert("Error en la petición");
                                            }
                                            });
  }

  ngOnInit(): void{
    this.getDatos();
  }

  formatDay(a): void{
    var aux = a.last.date;
    this.today = new Date(aux.year,aux.month-1,aux.day);
  }

}
