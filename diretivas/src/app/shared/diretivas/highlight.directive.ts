import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {

  @HostListener('mouseenter') mouseEntrou() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseSaiu() {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor!: string;

  @Input() defaultColor: string = 'white';
  @Input() highlightColor: string = 'blue';

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
