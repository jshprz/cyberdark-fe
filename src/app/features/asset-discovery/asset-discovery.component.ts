import { Component } from '@angular/core';
import { TableToolbarComponent } from '../../shared/components/table/table-toolbar/table-toolbar.component';
import { DataTableComponent } from '../../shared/components/table/data-table/data-table.component';

@Component({
  selector: 'app-asset-discovery',
  imports: [TableToolbarComponent, DataTableComponent],
  templateUrl: './asset-discovery.component.html',
  styleUrl: './asset-discovery.component.css',
})
export class AssetDiscoveryComponent {}
