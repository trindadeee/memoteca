import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({//sinalizar que é uma classe que pode ser usado em outros componentes pela injeção de dependência
  providedIn: 'root'//pode ser fornecido em toda a aplicação pois esta como root
})
export class PensamentoService {//injeção de dependência é feito no construtor

  private readonly API = 'http://localhost:3000/pensamentos';//backend

  constructor(private http: HttpClient) { }

  listagem(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.API);
  }

  criacao(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento);
  }

  deletar(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Pensamento>(url);
  }

  buscarPensamentoPorId(id: number): Observable<Pensamento>{
    const url = `${this.API}/${id}`;
    return this.http.get<Pensamento>(url);
  }

  atualizar(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.API}/${pensamento.id}`;
    return this.http.put<Pensamento>(url, pensamento);
  }

}// o observable é tipo para o metodo observar a lista de pensamentos
