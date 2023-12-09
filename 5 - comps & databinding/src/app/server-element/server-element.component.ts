import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
})
export class ServerElementComponent {
  // Input property to receive data from a parent component
  // 'srvElement' is an alias for the property when used in binding
  @Input('srvElement') element: { type: string; name: string; content: string };
}
