import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  postData(apiUrl: string, body:any, token:string){
    const headers = {
      Authorization: token
    }
    return this.http.post(apiUrl, body, { headers });
  }


}
