import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';

export type Column<T> = {
  header: string;
  accessor: keyof T;
};

@Component({
  selector: 'app-data-table',
  imports: [CommonModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css',
})
export class DataTableComponent<T extends Record<string, any>> {
  @Input() columns: Column<T>[] = [];
  @Input() data: T[] = [];
  @Input() renderCell?: TemplateRef<any>;
  @Input() emptyMessage: string = 'No data available';
}
