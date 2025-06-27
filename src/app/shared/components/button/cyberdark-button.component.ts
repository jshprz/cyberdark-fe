import { Component, computed, input, Input, Signal } from '@angular/core';

export type Variant = 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';

@Component({
  selector: 'app-cyberdark-button',
  imports: [],
  templateUrl: './cyberdark-button.component.html',
  styleUrl: './cyberdark-button.component.css',
})
export class CyberdarkButtonComponent {
  label = input<string>('Click');
  type = input<'button' | 'submit'>('button');
  variant = input<Variant>('primary');
  customClass = input<string>('');
  isLoading = input<boolean>(false);
  disabled = input<boolean>(false);

  finalDisabled: Signal<boolean> = computed(() => {
    if (this.isLoading() || this.disabled()) {
      return true;
    } else {
      return false;
    }
  });

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
      }[this.variant()] ?? 'btn-primary'
    );
  }
}
