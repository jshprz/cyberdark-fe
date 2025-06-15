import { Component } from '@angular/core';
import { TableToolbarComponent } from '../../shared/components/table/table-toolbar/table-toolbar.component';
import { DataTableComponent } from '../../shared/components/table/data-table/data-table.component';

type AssetDiscoveryRecord = {
  ip_address: string;
  ports: string;
  hostname: string;
  operating_system: string;
};

@Component({
  selector: 'app-asset-discovery',
  imports: [TableToolbarComponent, DataTableComponent],
  templateUrl: './asset-discovery.component.html',
  styleUrl: './asset-discovery.component.css',
})
export class AssetDiscoveryComponent {
  readonly assetDiscoveryColumns: { header: string; accessor: keyof AssetDiscoveryRecord }[] = [
    { header: 'IP ADDRESS', accessor: 'ip_address' },
    { header: 'PORTS', accessor: 'ports' },
    { header: 'HOSTNAME', accessor: 'hostname' },
    { header: 'OPERATING SYSTEM', accessor: 'operating_system' },
  ];

  readonly assetDiscoveryData: AssetDiscoveryRecord[] = [
    {
      ip_address: '77.137.46.250',
      ports: '80, 443',
      hostname: 'http://login01.example.com',
      operating_system: 'Fortinet',
    },
    {
      ip_address: '82.81.136.18',
      ports: '80, 443',
      hostname: 'https://secure.example.com',
      operating_system: 'Windows',
    },
    {
      ip_address: '45.83.113.124',
      ports: '80, 443, 4444',
      hostname: 'proxy01.example.com',
      operating_system: 'Windows',
    },
    {
      ip_address: '212.125.111.195',
      ports: '80, 443, 4444',
      hostname: 'https://firewall.example.com',
      operating_system: 'Linux',
    },
    {
      ip_address: '192.168.146.30',
      ports: 'No ports found',
      hostname: 'https://offline.example.com',
      operating_system: 'Linux',
    },
  ];
}
