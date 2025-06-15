import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  Search,
  Bell,
  ChartColumn,
  TriangleAlert,
  ShieldAlert,
  Settings,
  LogOut,
  LucideAngularModule,
} from 'lucide-angular';

@Component({
  selector: 'app-sidebar',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  readonly Search = Search;
  readonly Bell = Bell;
  readonly ChartColumn = ChartColumn;
  readonly TriangleAlert = TriangleAlert;
  readonly ShieldAlert = ShieldAlert;
  readonly Settings = Settings;
  readonly LogOut = LogOut;
}
