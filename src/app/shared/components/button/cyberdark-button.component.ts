import { Component, Input } from '@angular/core';

export type Variant = 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';

@Component({
  selector: 'app-cyberdark-button',
  imports: [],
  templateUrl: './cyberdark-button.component.html',
  styleUrl: './cyberdark-button.component.css',
})
export class CyberdarkButtonComponent {
  @Input() label = 'Click';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() disabled: boolean = false;
  @Input() variant: Variant = 'primary';
  @Input() customClass: string = '';

  get variantClass(): string {
    return (
      {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        accent: 'btn-accent',
        info: 'btn-info',
        success: 'btn-success',
        warning: 'btn-warning',
        error: 'btn-error',
      }[this.variant] ?? 'btn-primary'
    );
  }
}
