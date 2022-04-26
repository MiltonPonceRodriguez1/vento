import { Component, OnInit } from '@angular/core';
import { Motorcycle } from '../../models/motorcycle';
import { MotorcycleService } from "../../services/motorcycle.service";

@Component({
  selector: 'app-motorcycle-new',
  templateUrl: './motorcycle-new.component.html',
  styleUrls: ['./motorcycle-new.component.css'],
  providers: [MotorcycleService]
})
export class MotorcycleNewComponent implements OnInit {

  public motorcycle: Motorcycle;

  constructor(
    private _motorcycleService: MotorcycleService
  ) {
    this.motorcycle = new Motorcycle(1, '', 1, 2, 0, 0, 'instock', 0, 0, 0, 'tax statud', 'tax class');
  }

  ngOnInit(): void {
  }

  on_submit(form:any) {

    this._motorcycleService.add_motorcycle(this.motorcycle).subscribe(
      response => {
        console.log(response);
        form.reset();
      },
      error => {
        console.log(<any>error);
      }
    );

  }

}
