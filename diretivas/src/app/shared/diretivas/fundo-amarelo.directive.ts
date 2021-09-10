import { Directive, ElementRef, Renderer2 } from '@angular/core';

//NOMEAR A TAG EM FRENTE AO SELETOR PARA DEFINIR UMA TÉCNICA ESPECIFICA PARA SER UTILIZADA
@Directive({
  selector: 'p[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    // RISCO DE SEGURANÇA XXS ( CROSS-SCRIPTING )
    // this._elementRef.nativeElement.style.backgroundColor = 'yellow';
    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow'
    );
  }

}
