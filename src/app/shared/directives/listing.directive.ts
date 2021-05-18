import { Directive, DoCheck, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appListing]'
})
export class ListingDirective implements OnInit, DoCheck {
  @Input() appListing: string[] = [];
  @Input() titleVal = '';
  @Input() striped = false;
  @Input() deleteOption = false;
  @Output() delete = new EventEmitter();

  parentElement: HTMLElement;
  headingBox: HTMLElement;
  listingBox: HTMLElement;
  // @HostListener('click') onClick(): void {
  //   console.log('button clicked');
  // }

  constructor(private ele: ElementRef, private render: Renderer2) {
    this.parentElement = this.ele.nativeElement;
    this.headingBox = this.render.createElement('div');
    this.listingBox = this.render.createElement('div');
  }

  ngDoCheck(): void {
    console.log(this.appListing);
    console.log(this.parentElement);

    // this.emptyParentElement();
    this.addTitle();
    this.createList();
  }
  ngOnInit(): void {

  }
  // emptyParentElement(): void {
  //   this.parentElement.innerHTML = '';
  // }

  addTitle(): void {

    if (this.titleVal) {
      const heading = this.render.createElement('h3');
      this.render.appendChild(heading, this.render.createText(this.titleVal));
      this.headingBox.innerHTML = '';
      this.render.appendChild(this.headingBox, heading);
      this.render.appendChild(this.parentElement, this.headingBox);
    }
  }
  createList(): void {
    const ul = this.render.createElement('ul');
    this.render.addClass(ul, 'list-group');
    for (const [index, item] of this.appListing.entries()) {
      // console.log(index);
      const li = this.render.createElement('li');
      this.render.addClass(li, 'list-group-item');
      if (this.deleteOption) {
        const deleteButton = this.render.createElement('button');
        const deleteButtonClassList = ['btn', 'btn-danger', 'ml-2', 'mr-2'];
        for (const className of deleteButtonClassList) {
          this.render.addClass(deleteButton, className);
        }
        // this.render.addClass(deleteButton, 'btn');
        // this.render.addClass(deleteButton, 'btn-danger');
        // this.render.addClass(deleteButton, 'ml-2');
        // this.render.addClass(deleteButton, 'mr-2');
        this.render.appendChild(deleteButton, this.render.createText('Delete'));
        this.render.listen(deleteButton, 'click', this.onClick.bind(this, item));
        this.render.appendChild(li, deleteButton);
      }


      if (this.striped && index % 2 !== 0) {
        this.render.addClass(li, 'list-group-item-secondary');
      }
      const textNode = this.render.createText(`${index + 1}. ${item}`);
      this.render.appendChild(li, textNode);
      this.render.appendChild(ul, li);
    }
    this.listingBox.innerHTML = '';
    this.render.appendChild(this.listingBox, ul);
    this.render.appendChild(this.parentElement, this.listingBox);
  }

  onClick(value: string): void {
    console.log('button clicked', value);
    this.delete.emit(value);
  }
}
