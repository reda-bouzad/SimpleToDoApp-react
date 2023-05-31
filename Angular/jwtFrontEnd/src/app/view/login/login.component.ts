import { Component } from '@angular/core';
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // variables :
  email: any;
  password: any;

  constructor(private authService: AuthService) {}

  login() {
    // Perform login logic
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        // Login successful
        // Handle success, such as storing the JWT token and navigating to the main page
      },
      (error) => {
        // Login failed
        // Handle error, such as displaying an error message
      }
    );
  }


}
