import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor(private service: PensamentoService, private router: Router) { }

  ngOnInit(): void {
  }

  criarPensamento(){
    this.service.criacao(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento']);//usando rotas para redirecionar quando o pensamento for criado navegar para a home
    });
  }

  cancelarPensamento(){
    this.router.navigate(['/listarPensamento']);
  }

}
