import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Options } from '../../types'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  // <T> allows the function that is of type "any", bypassing the TypeScript static requirements
  // Observable allows us to Oberve and wait for the asynchronous action (similar to a Promise) to be fulfilled
  get<T>(url: string, options: Options): Observable<T> {
    return this.httpClient.get<T>(url, options) as Observable<T>;
  }
}
