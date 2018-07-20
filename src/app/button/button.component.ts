import { Input, Component, ViewEncapsulation, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'custom-button',
  template: `
  <button (click)="handleClick()" class="test">{{label}}</button>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent {

  @Input() label = 'default label';
  @Output() onAction = new EventEmitter<number>();
  private clicksCt = 0;

  handleClick() {
    this.clicksCt++;
    this.onAction.emit(this.clicksCt);
  }
}
