import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getCountries(): Observable<any> {
    // for improvements, we can use axios as well
    return this.http.get<any>('http://localhost:8080/api/countries');
  }

  getCities(countryId: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/countries/${countryId}/cities`);
  }

  getSchools(cityId: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/cities/${cityId}/schools`);
  }
}
