import { Component } from '@angular/core';
import { BaseTableCardComponent } from '../../shared/components/card/base-table-card/base-table-card.component';
import { BaseListCardComponent } from '../../shared/components/card/base-list-card/base-list-card.component';

@Component({
  selector: 'app-dashboard',
  imports: [BaseTableCardComponent, BaseListCardComponent],
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

  readonly topTechnologies: string[] = ['AWS', 'Azure', 'GCP'];

  readonly vulnerabilityScores: { label: string; value: string }[] = [
    { label: 'Label 1', value: 'Value 1' },
    { label: 'Label 2', value: 'Value 2' },
    { label: 'Label 3', value: 'Value 3' },
    { label: 'Label 4', value: 'Value 4' },
  ];
}
