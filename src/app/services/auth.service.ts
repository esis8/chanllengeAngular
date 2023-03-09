import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/user.model';

interface AuthResponseData {
    ResultOK: boolean;
    ErrorMessage: string;
}

@Injectable({ providedIn: 'root'})
export class AuthService {
    constructor(
        private http: HttpClient,
    ) { }

    login(username:string, password:string):Observable<User> {
        return this.http.post<AuthResponseData>('https://codingchallenge.quartzsales.com/WS/auth.svc/Login', {
            "Username": username,
            "Password": password
        },{observe: "response"}).pipe(map(x => {
            console.log(x);
            if(x.body.ResultOK == true) {
                const token = x.headers.get("Authorization");
                const refreshToken = x.headers.get("Refresh");    
                const user = new User(username, token, refreshToken);

                return user; 
            } else {
                console.log('throw error');
                throw new Error(x.body.ErrorMessage);
            }
        }));
    }
}
