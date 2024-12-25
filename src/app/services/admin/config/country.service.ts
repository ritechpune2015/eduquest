import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CountryDto } from '../../../core/dtos/countrydto.interface';
import { Observable } from 'rxjs';
import { apibaseurl } from '../../../core/constants';

@Injectable()
export class CountryService {
 
  //countryapiurl:string=`${apibaseurl}/commonapi/countryapi`;
  countryapiurl:string="https://localhost:7214/api/commonapi/countryapi";
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  getAllCountries():Observable<CountryDto []>
  {
     return this.http.get<CountryDto []>(this.countryapiurl);
  }
 
}
