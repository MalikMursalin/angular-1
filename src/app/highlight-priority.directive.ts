import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightPriority]',
})
export class HighlightPriorityDirective {
  @Input('appHighlightPriority') priority: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (this.priority === 'high') {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'red');
    } else if (this.priority === 'medium') {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');
    } else if (this.priority === 'low') {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'green');
    }
  }
}
