import { UsersInterface } from './../_interfaces/users';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-usuarios-add',
  templateUrl: './usuarios-add.component.html',
  styleUrls: ['./usuarios-add.component.scss']
})
export class UsuariosAddComponent implements OnInit {

  users: UsersInterface = {id: 0, nome: '', sobrenome: '', endereco: '', cpf: '', email: '', senha: '', restricao: "1"}
  usersList: UsersInterface[] = [];
  currentUser;
  constructor(private _location: Location, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.usersList = JSON.parse(localStorage.getItem("users"));
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
      if(this.currentUser.restricao != "0") {
        this._location.back();
        alert("Você não possui permissao para adicionar usuário")
      }
  }

  navigateBack($event) {
    this._location.back();
  }

  salvar() {
    this.usersList.push(this.users);
    localStorage.setItem("users", JSON.stringify(this.usersList))
    this._location.back();
    let snackBarRef = this.snackBar.open('Usuário cadastrado com sucesso', '', {
      duration: 5000
    });
  }

}
