import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  // property here must have name the same to selector
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      // create view in viewContainer
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      // remove what we added in if condition from the DOM
      this.vcRef.clear();
    }
  }
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {  }

}
