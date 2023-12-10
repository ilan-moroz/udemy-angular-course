import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  // Defines the directive, allowing it to be used as [appDropdown] in HTML elements
  selector: '[appDropdown]',
})
export class DropdownDirective {
  // Binds the 'open' CSS class to the element based on the value of isOpen
  @HostBinding('class.open') isOpen = false;

  constructor() {}

  // Event listener for the click event on the element
  @HostListener('click') onClick() {
    // Toggles the isOpen state, which adds/removes the 'open' class
    this.isOpen = !this.isOpen;
  }
}
