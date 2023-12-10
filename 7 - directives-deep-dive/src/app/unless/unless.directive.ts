import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]', // Custom directive selector, used as [appUnless] in templates
})
export class UnlessDirective {
  // Input property with a setter. The setter is called whenever the bound condition changes.
  @Input() set appUnless(condition: boolean) {
    // If the condition is false, render the template where this directive is used.
    if (!condition) this.vcRef.createEmbeddedView(this.templateRef);
    // If the condition is true, clear the rendered template.
    else this.vcRef.clear();
  }

  constructor(
    private templateRef: TemplateRef<any>, // Injects a reference to the template
    private vcRef: ViewContainerRef // Provides access to the container where the template is placed
  ) {}
}
