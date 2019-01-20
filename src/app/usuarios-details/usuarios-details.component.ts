import { UsersInterface } from './../_interfaces/users';
import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuarios-details',
  templateUrl: './usuarios-details.component.html',
  styleUrls: ['./usuarios-details.component.scss']
})
export class UsuariosDetailsComponent implements OnInit {
  dados: UsersInterface;
  private sub: any;

  constructor(private _location: Location, private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.dados = JSON.parse(params['data']) || null;
        console.log(this.dados)
      });
  }

  navigateBack($event) {
    this._location.back();
  }

}
