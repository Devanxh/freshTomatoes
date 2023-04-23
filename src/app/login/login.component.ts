import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

    userName = "";
    password = "";
    errormsg = "";
    success = false;
  
    constructor(private auth : AuthService) { }
  
    ngOnInit() {
    }
    login () {
      if(this.userName.trim().length === 0){
        this.errormsg = "Please enter username";
      }
      else if(this.password.trim().length === 0){
        this.errormsg = "Please enter password";
      }
      else{
        this.errormsg = "";
        let status = this.auth.login(this.userName, this.password);
        if(status === 200){
          this.success = true;
          this.errormsg = "Login Success";
        } else {
          this.success = false;
          this.errormsg = "Invalid Credentials";
        }
      }
    }


  }
