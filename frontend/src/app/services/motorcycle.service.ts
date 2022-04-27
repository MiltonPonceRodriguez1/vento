import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import {DataTablesModule} from 'angular-datatables';
import { Observable } from "rxjs";
import { Motorcycle } from '../models/motorcycle';
import { global } from "./global";

declare var jQuery:any;
declare var $:any;

@Injectable()
export class MotorcycleService {

    public url: string;
    public data: any;

    constructor(
        public _http: HttpClient
    ) {
        this.url = global.url;
    }

    test() {
        return "Hola desde el servicio motorcycle";
    }

    index(): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        //return this._http.get(this.url + 'motorcycle/index', {headers: headers});

        this._http.get(this.url + 'motorcycle/index').subscribe(data => {

        this.data = data;

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

        return this.data;
    }

    add_motorcycle(motorcycle: Motorcycle): Observable<any> {
        let json = JSON.stringify(motorcycle);
        let params = 'json='+json;

        console.log("json:: ", params);

        let headers = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded");

        return this._http.post(this.url+'motorcycle/store', params, {headers: headers});
    }

}
