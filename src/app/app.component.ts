import { Component, OnInit } from '@angular/core';
//import { Datos } from './datos';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public datos;
  errorMessage = null;

  constructor(
    private appService:AppService
  ){}

  getDatos(): void{
    this.appService.getData().subscribe(result => {
                                              this.datos = result;
                                              console.log(this.datos)
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

}
