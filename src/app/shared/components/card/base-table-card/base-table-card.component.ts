import { Component, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

export type Column<T> = {
  header: string;
  accessor: keyof T;
};

export type Variant = 'default' | 'compact' | 'striped' | 'bordered';

@Component({
  selector: 'app-base-table-card',
  imports: [CommonModule],
  templateUrl: './base-table-card.component.html',
  styleUrl: './base-table-card.component.css',
})
export class BaseTableCardComponent<T extends Record<string, any>> {
  @Input() title?: string;
  @Input() columns: Column<T>[] = [];
  @Input() data: T[] = [];
  @Input() variant: Variant = 'default';
  @Input() renderCell?: TemplateRef<any>;
  @Input() actions?: TemplateRef<any>;
  @Input() footer?: TemplateRef<any>;
  @Input() emptyMessage = 'No data available';

  get variantClass(): string {
    return (
      {
        default: 'table-sm',
        compact: 'table-xs',
        striped: 'table-zebra',
        bordered: 'table-bordered',
      }[this.variant] ?? 'table-sm'
    );
  }
}
