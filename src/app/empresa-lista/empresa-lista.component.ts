import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../empresa.service';
import { Empresa } from '../empresa.interface';

@Component({
  selector: 'app-empresa-lista',
  templateUrl: './empresa-lista.component.html',
  styleUrls: ['./empresa-lista.component.css']
})
export class EmpresaListaComponent implements OnInit {
  private readonly API_URL = 'https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners';
  constructor(
    private readonly empresaService: EmpresaService
  ) { }
  ngOnInit(): void {
    this.empresaService.recuperarEmpresas().subscribe((response: any[]) => {
      console.log(response, 'res');
    })

    this.empresaService.recuperarEmpresasPorId('62').subscribe((response: any[]) => {
      console.log(response, 'res por id');
    })
    // const emp: Empresa = {
    //   "createdAt": '',
    //   "clients": [],
    //   "description": 'teste diogo',
    //   "name": 'test ',
    //   "projects": [],
    //   "repositoryGit": 'git',
    //   "urlDoc": '..',
    // }
    // this.empresaService.adicionarEmpresas(emp).subscribe((response: any[]) => {
    //   console.log(response, 'res por id');
    // })

  }
}
