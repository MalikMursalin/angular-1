import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDisableButton]',
})
export class DisableButtonDirective {
  @Input('appDisableButton') status: string = '';

  constructor(private el: ElementRef) {}

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    if (this.status === 'done') {
      event.preventDefault();
    }
  }


  ngOnChanges() {
    if (this.status === 'done') {
      this.el.nativeElement.disabled = true;
    }
  }

  ngOnInit() {
    if (this.status === 'done') {
      this.el.nativeElement.disabled = true;
    }
  }
}
