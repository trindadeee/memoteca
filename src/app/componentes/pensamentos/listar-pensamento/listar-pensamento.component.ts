import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento[] = []; //simulando informações vindas do BackEnd, um json

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listagem().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }

}//para que o observable funcione é necessario usar o metodo subscribe. Lembra um construtor em java
