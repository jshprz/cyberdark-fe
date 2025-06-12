import { Component } from '@angular/core';
import { BaseTableCardComponent } from '../../shared/components/card/base-table-card/base-table-card.component';

@Component({
  selector: 'app-dashboard.component',
  imports: [BaseTableCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  readonly userColumns: { header: string; accessor: any }[] = [
    { header: 'Name', accessor: 'name' },
    { header: 'Email', accessor: 'email' },
  ];

  readonly userData: { name: string; email: string }[] = [
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'bob@example.com' },
  ];
}
