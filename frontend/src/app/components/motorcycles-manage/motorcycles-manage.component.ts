import { Component, OnInit } from '@angular/core';
import {DataTablesModule} from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from "@angular/common/http";

declare var jQuery:any;
declare var $:any;



@Component({
  selector: 'app-motorcycles-manage',
  templateUrl: './motorcycles-manage.component.html',
  styleUrls: ['./motorcycles-manage.component.css']
})
export class MotorcyclesManageComponent implements OnInit {
  public data: any;

  constructor(
    private http: HttpClient
  ) {
    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(data => {

      this.data = data;
      console.log(this.data);
      setTimeout(()=>{
        $('#datatableexample').DataTable({
          pagingType: 'full_numbers',
          pageLength: 5,
          processing: true,
          lengthMenu : [5, 10, 25],
          /*language: {
              "decimal": "",
              "emptyTable": "No hay información",
              "info": "Mostrando START a END de TOTAL Entradas",
              "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
              "infoFiltered": "(Filtrado de MAX total entradas)",
              "infoPostFix": "",
              "thousands": ",",
              "lengthMenu": "Mostrar MENU Entradas",
              "loadingRecords": "Cargando...",
              "processing": "Procesando...",
              "search": "Buscar:",
              "zeroRecords": "Sin resultados encontrados",
              "paginate": {
                  "first": "Primero",
                  "last": "Ultimo",
                  "next": "Siguiente",
                  "previous": "Anterior"
              }
          }*/
        });
      }, 1);
    }, error => console.error(error));
  }

  ngOnInit(): void {
  }

}
