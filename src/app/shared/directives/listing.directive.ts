import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appListing]'
})
export class ListingDirective implements OnInit {
  @Input() appListing: string[] = [];
  @Input() titleVal = '';
  @Input() striped = false;
  parentElement: HTMLElement;

  constructor(private ele: ElementRef, private render: Renderer2) {
    this.parentElement = this.ele.nativeElement;
  }

  ngOnInit(): void {
    console.log(this.appListing);
    console.log(this.parentElement);
    this.addTitle();
    this.createList();
  }

  addTitle(): void {
    if (this.titleVal) {
      const heading = this.render.createElement('h3');
      this.render.appendChild(heading, this.render.createText(this.titleVal));
      this.render.appendChild(this.parentElement, heading);
    }
  }
  createList(): void {
    const ul = this.render.createElement('ul');
    this.render.addClass(ul, 'list-group');
    for (const [index, item] of this.appListing.entries()) {
      // console.log(index);
      const li = this.render.createElement('li');
      this.render.addClass(li, 'list-group-item');
      if (this.striped && index % 2 !== 0) {
        this.render.addClass(li, 'list-group-item-secondary');
      }
      const textNode = this.render.createText(`${index + 1}. ${item}`);
      this.render.appendChild(li, textNode);
      this.render.appendChild(ul, li);
    }
    this.render.appendChild(this.parentElement, ul);
  }

}
