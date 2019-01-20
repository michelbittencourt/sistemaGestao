import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  users;
  countUsers;
  
  constructor(private router: Router) {
    this.countUsers = 0;
  }

  ngOnInit() {
    this.users = JSON.parse(localStorage.getItem("users"));
    this.countUsers = this.users.length
  }
  
  goToUsers() {
    this.router.navigate(['/main/usuarios'])
  }
}
