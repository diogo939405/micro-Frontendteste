import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario = '';
  senha = '';
  constructor(private authService: AuthService) { }

  logar() {
    console.log(this.usuario, this.senha);
    return '';
  }
}