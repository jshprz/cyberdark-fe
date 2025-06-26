import { Component } from '@angular/core';
import { DataTableComponent } from '../../shared/components/table/data-table/data-table.component';
import { TableToolbarComponent } from '../../shared/components/table/table-toolbar/table-toolbar.component';

type RiskScoringRow = {
  score: number;
  asset: string;
  type: string;
  ip_address: string;
  status: string;
  provider: string;
  takeover: string;
  technologies: string;
  first_seen: string;
};

@Component({
  selector: 'app-risk-scoring',
  imports: [DataTableComponent, TableToolbarComponent],
  templateUrl: './risk-scoring.component.html',
  styleUrl: './risk-scoring.component.css',
})
export class RiskScoringComponent {
  readonly riskScoringColumns: { header: string; accessor: any }[] = [
    { header: 'Score', accessor: 'score' },
    { header: 'Asset', accessor: 'asset' },
    { header: 'Type', accessor: 'type' },
    { header: 'IP Address', accessor: 'ip_address' },
    { header: 'Status', accessor: 'status' },
    { header: 'Provider', accessor: 'provider' },
    { header: 'Takeover', accessor: 'takeover' },
    { header: 'Technologies', accessor: 'technologies' },
    { header: 'First Seen', accessor: 'first_seen' },
  ];

  readonly riskScoringData: RiskScoringRow[] = [
    {
      score: 90,
      asset: 'cyberdark.com',
      type: 'Domain',
      ip_address: '192.168.0.1',
      status: 'Active',
      provider: 'Cloudflare',
      takeover: 'No',
      technologies: 'React, Node.js',
      first_seen: '2024-12-01',
    },
    {
      score: 60,
      asset: 'cyberdark-api.com',
      type: 'Subdomain',
      ip_address: '10.0.0.2',
      status: 'Inactive',
      provider: 'AWS',
      takeover: 'Yes',
      technologies: 'Express, MongoDB',
      first_seen: '2023-08-12',
    },
    {
      score: 75,
      asset: 'cyberdark.net',
      type: 'Subdomain',
      ip_address: '172.16.5.4',
      status: 'Active',
      provider: 'Azure',
      takeover: 'No',
      technologies: 'Angular, .NET',
      first_seen: '2025-02-10',
    },
  ];
}
