import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerCredentials = {cpf: "", senha: ""}
  users = [];

  constructor(public router: Router, private snackbar: MatSnackBar) { 
    this.users = JSON.parse(localStorage.getItem("users"))
  }

  ngOnInit() {
  }

  public login() {
    var success = false;
    for(let value in this.users) {
      if ((this.users[value].cpf == this.registerCredentials.cpf) && (this.users[value].senha == this.registerCredentials.senha)) {
        localStorage.setItem("currentUser", JSON.stringify(this.users[value]))
        this.router.navigate(['/main'])
        success = true;
        break;
      }
    }
    if(success == false) {
      this.snackbar.open('Login/Senha incorretos', 'Ok', {
        duration: 5000
      });
    }
  }

}
