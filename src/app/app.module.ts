

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask'
 

import { AppComponent } from './app.component';
import { AuthGuard } from './_guards/auth.guard';
import { NavComponent } from './nav/nav.component';
import { CustomMaterialModule } from "./_core/material.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { LoginComponent } from './login/login.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AppRoutingModule } from './app-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosAddComponent } from './usuarios-add/usuarios-add.component';
import { UsuariosDetailsComponent } from './usuarios-details/usuarios-details.component';
import { CpfPipe } from './_pipes/cpf.pipe';


const appRoutes: Routes = [
  { path: '', redirectTo: 'login', data: { title: 'First Component' }, pathMatch: 'full' },
  {
    path: 'login', component: LoginLayoutComponent, data: {title: 'First Component'},
    children: [
      {path: '', component: LoginComponent}
    ]
  },
  { path: 'main', component: HomeLayoutComponent,
    children: [
      { path: 'usuarios/detalhes', component: UsuariosDetailsComponent},
      { path: 'usuarios/add', component: UsuariosAddComponent},
      { path: 'usuarios', component: UsuariosComponent},
      { path: 'dashboard', component: DashboardComponent},
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],  canActivate: [ AuthGuard ]
  }
];
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginLayoutComponent,
    HomeLayoutComponent,
    DashboardComponent,
    LoginComponent,
    ToolbarComponent,
    UsuariosComponent,
    UsuariosAddComponent,
    UsuariosDetailsComponent,
    CpfPipe,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { useHash: false } // <-- debugging purposes only
    ),
    CustomMaterialModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }