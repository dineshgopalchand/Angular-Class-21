import { Directive, Input, ElementRef, HostListener, Renderer2, OnInit, Output, EventEmitter } from '@angular/core';
import { LowerCasePipe, UpperCasePipe, TitleCasePipe } from '@angular/common';
import { JSONFormat } from '../_help/jsonformat';

@Directive({
  selector: '[appNameValidation]',
})
export class NameValidationDirective implements OnInit {
  @Input() appNameValidation = undefined;
  @Input() textCase = '';
  @Output() submitField = new EventEmitter();
  currentElement: HTMLInputElement;
  parentNode: HTMLElement;
  appendedElement: HTMLDivElement;
  inputVal = '';

  constructor(
    private ele: ElementRef,
    private renderer: Renderer2,
    private lowerCase: LowerCasePipe,
    private upperCase: UpperCasePipe,
    private titleCase: TitleCasePipe
  ) {
    // console.log(this.ele);
    this.currentElement = this.ele.nativeElement;
    this.parentNode = this.renderer.parentNode(this.currentElement);
    this.appendedElement = this.renderer.createElement('div');
  }
  ngOnInit(): void {

    // this.parentNode = this.currentElement.parentNode as HTMLElement;
    this.renderer.setStyle(this.parentNode, 'position', 'relative');


  }
  @HostListener('keyup', ['$event']) onKeyup(event: KeyboardEvent): void {
    const styles: JSONFormat = {
      position: 'absolute',
      width: '100%',
      // 'background-color': '#e8e4e4',
      padding: '5px 10px',
      'min-height': '35px',
      'z-index': 99
    };
    this.inputVal = this.currentElement.value.trim();
    if (this.textCase === 'uppercase') {
      // this.inputVal = this.inputVal.toUpperCase();
      this.inputVal = this.upperCase.transform(this.inputVal);
    } else
      if (this.textCase === 'titlecase') {
        // this.inputVal = this.inputVal.toUpperCase();
        this.inputVal = this.titleCase.transform(this.inputVal);
      } else
        if (this.textCase === 'lowercase') {
          // this.inputVal = this.inputVal.toLowerCase();
          this.inputVal = this.lowerCase.transform(this.inputVal);
        }
    if ((event as KeyboardEvent).keyCode === 13 && this.inputVal !== '') {
      this.returnUpdatedValue();
    }
    // const textNode = this.renderer.createText(this.inputVal);
    this.renderer.setProperty(this.appendedElement, 'innerHTML', this.inputVal);
    for (const key in styles) {
      if (styles.hasOwnProperty(key)) {
        this.renderer.setStyle(this.appendedElement, key, styles[key]);
      }
    }
    const textLength = this.inputVal.length;
    let backgroundColor = '';
    switch (true) {
      case (textLength === 0):
        backgroundColor = '#e8e4e4';
        break;
      case (textLength < 3):
        backgroundColor = 'red';
        break;
      case (textLength <= 4):
        backgroundColor = 'blue';
        break;
      case (textLength <= 20):
        backgroundColor = 'green';
        break;
      case (textLength > 20):
        backgroundColor = 'yellow';
        break;
    }
    this.renderer.setStyle(this.appendedElement, 'background-color', backgroundColor);
    // this.renderer.setStyle(this.appendedElement, 'position', 'absolute');
    this.renderer.appendChild(this.parentNode, this.appendedElement);

  }
  @HostListener('blur') onBlur(): void {
    // const inputVal = this.currentElement.value;
    // const textNode = this.renderer.createText(inputVal);
    // this.renderer.setProperty(this.appendedElement, 'innerHTML', inputVal);
    this.updateAndRemove();
  }
  updateAndRemove(): void {
    this.renderer.setProperty(this.currentElement, 'value', this.inputVal);
    this.renderer.removeChild(this.parentNode, this.appendedElement);

  }
  returnUpdatedValue(): void {
    // this.renderer.setProperty(this.currentElement, 'value', '');
    // this.renderer.removeChild(this.parentNode, this.appendedElement);
    const returnVal: InputSubmitField = {
      value: this.inputVal
    };
    this.inputVal = '';
    this.updateAndRemove();
    this.submitField.emit(returnVal);

  }

}

export interface InputSubmitField {
  value: string;
}

