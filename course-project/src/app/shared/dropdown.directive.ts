import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]', // Defines the directive, allowing it to be used as [appDropdown] in HTML elements
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false; // Binds the 'open' CSS class to the element based on the value of isOpen

  constructor() {}

  @HostListener('click') onClick() {
    // Event listener for the click event on the element
    this.isOpen = !this.isOpen; // Toggles the isOpen state, which adds/removes the 'open' class
  }
}
