import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LegendPosition, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
import { single } from './data';

@Component({
  selector: 'app-donut-chart-card',
  imports: [CommonModule, FormsModule, NgxChartsModule],
  templateUrl: './donut-chart-card.component.html',
  styleUrl: './donut-chart-card.component.css',
})
export class DonutChartCardComponent {
  single: any[] | undefined;
  view: [number, number] = [300, 200];

  // options
  margins: [number, number, number, number] = [0, 20, 60, 20];
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: LegendPosition = LegendPosition.Below;

  colorScheme = {
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  constructor() {
    Object.assign(this, { single });
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
