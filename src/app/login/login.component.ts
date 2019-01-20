import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(public router: Router) { 
    this.users = JSON.parse(localStorage.getItem("users"))
  }

  ngOnInit() {
  }

  public login() {
    console.log("teste")
    for(let value in this.users) {
      if ((this.users[value].cpf == this.registerCredentials.cpf) && (this.users[value].senha == this.registerCredentials.senha)) {
        localStorage.setItem("currentUser", JSON.stringify(this.users[value]))
        this.router.navigate(['/main'])
      }
    }
  }

}
