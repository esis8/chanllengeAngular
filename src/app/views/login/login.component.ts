import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  inputPassword: boolean = false;
  validateUser: boolean = false;

  constructor(private _authService:AuthService, private router: Router) {}

  ngOnInit():void{
    if(sessionStorage.getItem('login')){
      this.router.navigate(['/dashboard'])
    }
  }

  validarPassword(text:string):boolean{
    let regex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    return regex.test(text);
  }


  validarInputPassword():void{

    if(this.validarPassword(this.password)){
      this.inputPassword = false;
    }else{
      this.inputPassword = true;
    }
  }


  onSubmit(){
    this.validarInputPassword();

    if(this.username == '' || this.inputPassword){
      this.inputPassword = true;
    }else{
      this._authService.login(this.username, this.password)
      .subscribe(user => {
        sessionStorage.setItem('login', user.token)
        this.router.navigate(['/dashboard'])
      }, error => {
        this.inputPassword = true;
      });

    }
  }




}
