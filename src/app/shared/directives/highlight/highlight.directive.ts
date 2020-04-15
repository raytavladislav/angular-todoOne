import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHightlight') highlightColor: string;

  constructor(private el: ElementRef) {
    // console.log(this.el);
    // el.nativeElement.style.backgroundColor = 'yellow';
  }
  
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
 
  private highlight(color: string = 'yellow'): void {
    this.el.nativeElement.style.backgroundColor = color;
  }
}

