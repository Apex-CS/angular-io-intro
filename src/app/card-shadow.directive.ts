import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardShadow]'
})
export class CardShadowDirective {

  constructor(private currentCard: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.addShadow(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.addShadow(false);
  }

  private addShadow(isVible:boolean) {
    if(isVible) {
      this.currentCard.nativeElement.style.boxShadow = "10px 10px 5px #888888";
      this.currentCard.nativeElement.style.background = "red";
    } else {
      this.currentCard.nativeElement.style.boxShadow = "";
    }
  }
}
