import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8036/api/v1/auth/authenicate'; // Replace with your login API endpoint URL
  private authToken: string = "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiW01BTkFHRVJfREVMRVRFLCBBRE1JTl9VUERBVEUsIEFETUlOX0RFTEVURSwgTUFOQUdFUl9DUkVBVEUsIEFETUlOX0NSRUFURSwgTUFOQUdFUl9VUERBVEUsIE1BTkFHRVJfUkVBRCwgQURNSU5fUkVBRCwgUk9MRV9BRE1JTl0iLCJzdWIiOiJhbmFzQGdtYWlsLmNvbSIsImlhdCI6MTY4NTU2NDExOH0.Lm5sHVu7b7J8ztwKWhe795_AmzZGcl1D4PRNvErZnUE";

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const loginData = {
      email: email,
      password: password
    };

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authToken}`
    });

    return this.http.post(this.loginUrl, loginData, { headers: headers });
  }
}
