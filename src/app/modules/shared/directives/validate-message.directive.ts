import {
  ComponentFactoryResolver,
  Directive,
  OnInit,
  ViewContainerRef,
  HostListener,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import { SelectListComponent } from '../components/select-list/select-list.component';
import { SelectItem } from '../interfaces/select-item';

@Directive({
  selector: '[appValidateMessage]',
})
export class ValidateMessageDirective implements OnInit {
  @Input() data?: SelectItem[];
  @Output() selectedValue = new EventEmitter<SelectItem>();

  constructor(
    private viewContainerRef: ViewContainerRef,
    protected componentFactoryResolver: ComponentFactoryResolver
  ) {}

  @HostListener('click')
  onClick(): void {
    this.loadComponent();
  }

  @HostListener('blur')
  onBlur(): void {
    //this.viewContainerRef.clear();
  }

  ngOnInit(): void {}

  loadComponent(): void {
    let componentFactory = null;
    componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      SelectListComponent
    );
    const viewContainerRef = this.viewContainerRef;
    viewContainerRef?.clear();
    const componentRef = viewContainerRef?.createComponent<SelectListComponent>(
      componentFactory
    );
    componentRef.instance.items = this.data;
    componentRef.instance.selected.subscribe((v) => {
      this.selectedValue.emit(v);
      this.viewContainerRef.clear();
    });
  }
}
