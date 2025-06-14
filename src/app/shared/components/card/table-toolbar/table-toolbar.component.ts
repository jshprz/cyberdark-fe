import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-toolbar',
  imports: [],
  templateUrl: './table-toolbar.component.html',
  styleUrl: './table-toolbar.component.css',
})
export class TableToolbarComponent {
  @Input() filterStatus?: boolean;
  @Input() filterProvider?: boolean;
  @Input() filterScore?: boolean;
  @Input() filterTechnology?: boolean;
}
