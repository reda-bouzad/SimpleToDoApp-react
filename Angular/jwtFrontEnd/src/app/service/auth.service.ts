import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8036/api/v1/auth/authenticate';
  private tokenUrl = 'http://localhost:8036/api/v1/auth/token';
  private authToken: string = "";
  private isAuthenticated: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  getToken(email: string): Observable<string> {
    return this.http.get(`${this.tokenUrl}/${email}`, { responseType: 'text' });
  }

  storeToken(email: string): Observable<any> {
    return this.getToken(email).pipe(
      tap(data => {
        this.authToken = data; // Assign the token value to the authToken property
      })
    );
  }

  functionisAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  login(email: string, password: string): Observable<any> {
    const loginData = {
      email: email,
      password: password
    };

    return this.storeToken(email).pipe(
      switchMap(() => {
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${this.authToken}`
        });
        return this.http.post(this.loginUrl, loginData, { headers: headers });
      }),
      tap(() => {
        // Navigation to the success page
        this.isAuthenticated = true;
        this.router.navigate(['/success']); // Navigate to the success page
      })
    );
  }
}
