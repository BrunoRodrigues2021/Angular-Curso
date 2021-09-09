import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  // Eventos (Hooks)             Quando ?
  // ngOnChanges                 antes e quando o valor property-binding é atualizado
  // ngOnInit                    quando o component é inicializado
  // ngDoCheck                   a cada ciclo de verificação de mudanças
  // ngAfterContentInit          depois de inserir conteúdo externo na view
  // ngAfterContentChecked       a cada verificação de conteúdo inserido
  // ngAfterViewChecked          a cada verificação de conteudo / conteúdo filho
  // ngOnDestroy                 antes da diretiva/component ser destruido

  @Input('valor') valorInicial: number = 10;

  constructor() {
    this.log('constructor');
  }

  ngOnChanges() {
    this.log('ngOnChanges');
  }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }


}
