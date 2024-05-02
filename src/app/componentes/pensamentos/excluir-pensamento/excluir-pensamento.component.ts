import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(private service: PensamentoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); //com este codigo que é capturado o id do pensamento
    this.service.buscarPensamentoPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    })
  }

  excluirPensamento(){
    if(this.pensamento.id){
      this.service.deletar(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listarPensamento']);
      })
    }
  }

  naoExcluirPensamento(){
    this.router.navigate(['/listarPensamento']);
  }

}//activatedRoute é uma classe que fornece informações sobre as rotas, caminhos que virão do card pensamento
//snapshot é tipo uma captura de tela
//paramMap é como se fosse feita um mapeamento das informações do pensamento
