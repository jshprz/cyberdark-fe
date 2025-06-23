import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  LucideAngularModule,
  ClipboardPlus,
  LayoutDashboard,
  Workflow,
  TextSearch,
} from 'lucide-angular';

@Component({
  selector: 'app-sidebar',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  readonly TextSearch = TextSearch;
  readonly Workflow = Workflow;
  readonly LayoutDashboard = LayoutDashboard;
  readonly ClipboardPlus = ClipboardPlus;
}
