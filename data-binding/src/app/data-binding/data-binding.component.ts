import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http//loiane.com';
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com/400/200/nature/';

  valorAtual: string = "";
  valorSalvo: string = "";

  isMouseOver: boolean = false;

  nome: string = "abc";
  pessoa: any = {
    nome: 'Bruno',
    idade: 20,
    endereco: 'Nova Odessa'
  }

  constructor() { }

  ngOnInit(): void {
  }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert("Clicado")
  }

  onKeyUp(event: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>event.target).value;
  }

  salvarValor(valor: string) {
    this.valorSalvo = valor;
  }

  onMouserOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

}
