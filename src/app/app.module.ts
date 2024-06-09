import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { ClienteCadaComponent } from './cliente-cada/cliente-cada.component';
import { ClienteLisComponent } from './cliente-lis/cliente-lis.component';
import { EmpresaCadaComponent } from './empresa-cada/empresa-cada.component';
import { EmpresaListaComponent } from './empresa-lista/empresa-lista.component';
import { AuthService } from './auth.service';



import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    InicioComponent,
    ClienteCadaComponent,
    ClienteLisComponent,
    EmpresaCadaComponent,
    EmpresaListaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
