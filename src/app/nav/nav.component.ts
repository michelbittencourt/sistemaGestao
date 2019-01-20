import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  usuario;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private route: Router) {
    this.usuario = JSON.parse(localStorage.getItem("currentUser"));
  }

  details() {
    var usuario = JSON.parse(localStorage.getItem("currentUser"))
    this.route.navigate(['/main/usuarios/detalhes'], { queryParams: { data: JSON.stringify(usuario) }})
  }

  logout() {
    this.route.navigate(['/login'])
  }

}
