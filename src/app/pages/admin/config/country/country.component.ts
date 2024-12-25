import { Component,OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';

import { CountryService } from '../../../../services/admin/config/country.service';
import { CountryDto } from '../../../../core/dtos/countrydto.interface';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [
    DataTablesModule
  ],
  providers:[CountryService],
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryComponent implements OnInit {
  countries:CountryDto [];
  dtOptions:any={};
  dttrigger:Subject<any>=new Subject<any>();
  constructor(private svr:CountryService)
  {
    this.countries=[];
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  }

  ngOnInit(): void {
    this.svr.getAllCountries().subscribe(
      {
       next:(result)=> {
        this.countries=result;
       // alert(JSON.stringify(this.countries));
        this.dttrigger.next(null);
      },
       error:(err) => alert(JSON.stringify(err))
      }
    );
  }

}
