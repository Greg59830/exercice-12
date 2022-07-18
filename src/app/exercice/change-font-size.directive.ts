import { Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appChangeFontSize]'
})
export class ChangeFontSizeDirective implements OnInit, OnChanges {
  @Input() appChangeFontSize!: number;

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, "font-size", this.appChangeFontSize + "rem")
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.renderer.setStyle(this.element.nativeElement, "font-size", this.appChangeFontSize + "rem")
    
  }

}