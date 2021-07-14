import { Directive,HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputEmail]'
})
export class InputEmailDirective {

  constructor(private element: ElementRef) { }

  @HostListener("focus") onFocus(){
    this.element.nativeElement.classList.add("bg-warning");
  }

  @HostListener("blur") onBlur(){
    this.element.nativeElement.classList.remove("bg-warning");

    let inputValue: string = this.element.nativeElement.value;

    if(!inputValue.includes("@")){
      this.element.nativeElement.value = inputValue.toLowerCase() + "@gmail.com";
    }

  }

}
