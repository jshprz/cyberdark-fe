import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataTableComponent } from '../../shared/components/table/data-table/data-table.component';
import { TableToolbarComponent } from '../../shared/components/table/table-toolbar/table-toolbar.component';

type LeakRecord = {
  username: string;
  password: string;
  domain: string;
  username_exists: boolean;
  username_blocked: boolean;
  password_valid: boolean;
};

@Component({
  selector: 'app-reports',
  imports: [CommonModule, DataTableComponent, TableToolbarComponent],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css',
})
export class ReportsComponent {
  readonly leakColumns: { header: string; accessor: keyof LeakRecord }[] = [
    { header: 'USERNAME', accessor: 'username' },
    { header: 'PASSWORD', accessor: 'password' },
    { header: 'DOMAIN', accessor: 'domain' },
    { header: 'USERNAME EXISTS', accessor: 'username_exists' },
    { header: 'USERNAME BLOCKED', accessor: 'username_blocked' },
    { header: 'PASSWORD VALID', accessor: 'password_valid' },
  ];

  readonly leakData: LeakRecord[] = [
    {
      username: 'israela',
      password: '******',
      domain: 'gmail.co.il',
      username_exists: false,
      username_blocked: false,
      password_valid: false,
    },
    {
      username: 'guy',
      password: '******',
      domain: 'gmail.co.il',
      username_exists: true,
      username_blocked: false,
      password_valid: false,
    },
    {
      username: 'yaniv',
      password: '******',
      domain: 'gmail.co.il',
      username_exists: true,
      username_blocked: false,
      password_valid: false,
    },
    {
      username: 'malih',
      password: '******',
      domain: 'gmail.co.il',
      username_exists: true,
      username_blocked: false,
      password_valid: false,
    },
    {
      username: 'shaya',
      password: '******',
      domain: 'osim.co.il',
      username_exists: true,
      username_blocked: false,
      password_valid: false,
    },
    {
      username: 'eyalg',
      password: '******',
      domain: 'gmail.co.il',
      username_exists: true,
      username_blocked: false,
      password_valid: false,
    },
    {
      username: 'alonZ',
      password: '******',
      domain: 'jamal.co.il',
      username_exists: false,
      username_blocked: false,
      password_valid: false,
    },
    {
      username: 'gaston',
      password: '******',
      domain: 'jamal.co.il',
      username_exists: true,
      username_blocked: false,
      password_valid: false,
    },
  ];
}
