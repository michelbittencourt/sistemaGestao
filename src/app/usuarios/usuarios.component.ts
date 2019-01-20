import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { Router } from '@angular/router';
import { UsersInterface } from '../_interfaces/users';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'email', 'cpf', 'btn'];
  usersList: UsersInterface[] = [];
  currentUser;
  listaUsuarios = [];
  searchValue = "";

  constructor(private route: Router) { }

  ngOnInit() {
    this.usersList = JSON.parse(localStorage.getItem("users"));
    this.listaUsuarios = this.usersList;
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"))
  }

  onSubmit() {
    console.log("Teste")
  }

  searchUser($event) {
    this.applyFilter()
  }

  applyFilter() {
    this.listaUsuarios = this.usersList;
    if (this.searchValue && this.searchValue.trim() != '') {
      this.listaUsuarios = this.usersList.filter((item) => {
        if (item != null) {
          return ((item.nome.toLowerCase() + " " + item.sobrenome.toLowerCase()).indexOf(this.searchValue.toLowerCase()) > -1);
        }
      })
    }
  }

  details(element) {
    this.route.navigate(['/main/usuarios/detalhes'], { queryParams: { data: JSON.stringify(element) }})
  }

  goToAddUser() {
    this.route.navigate(['/main/usuarios/add']);
    // main/usuarios/add
  }



}
