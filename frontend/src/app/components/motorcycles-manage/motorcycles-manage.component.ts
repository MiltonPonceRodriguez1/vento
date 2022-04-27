import { Component, OnInit } from '@angular/core';
import {DataTablesModule} from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from "@angular/common/http";
import { MotorcycleService } from "../../services/motorcycle.service";

declare var jQuery:any;
declare var $:any;



@Component({
  selector: 'app-motorcycles-manage',
  templateUrl: './motorcycles-manage.component.html',
  styleUrls: ['./motorcycles-manage.component.css'],
  providers: [MotorcycleService]
})
export class MotorcyclesManageComponent implements OnInit {
  public data: any;

  constructor(
    private _motorcycleService: MotorcycleService,
    private http: HttpClient
  ) {  }

  ngOnInit(): void {
    console.log("ENTRO XD");
    this.data = this._motorcycleService.index();
    console.log(this.data);
  }

}
