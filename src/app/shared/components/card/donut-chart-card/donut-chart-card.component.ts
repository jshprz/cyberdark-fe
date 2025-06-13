import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IgxDoughnutChartModule,
  IgxItemLegendModule,
  IgxDoughnutChartComponent,
  IgxRingSeriesModule,
  IgxLegendModule,
} from 'igniteui-angular-charts';

@Component({
  selector: 'app-donut-chart-card',
  imports: [
    CommonModule,
    FormsModule,
    IgxDoughnutChartModule,
    IgxRingSeriesModule,
    IgxLegendModule,
    IgxItemLegendModule,
  ],
  templateUrl: './donut-chart-card.component.html',
  styleUrl: './donut-chart-card.component.css',
})
export class DonutChartCardComponent implements AfterViewInit {
  public data: any;
  public selectedSliceLabel: string = 'No Selection';
  public selectedSliceValue: string = '0%';

  @ViewChild('chart', { static: true })
  public chart!: IgxDoughnutChartComponent;

  constructor() {
    this.data = [
      { Value: 37, Label: 'AWS', Summary: 'AWS 37%' },
      { Value: 25, Label: 'CloudFront', Summary: 'CloudFront 25%' },
      { Value: 12, Label: 'CloudFlare', Summary: 'CloudFlare 12%' },
      { Value: 11, Label: 'Azure', Summary: 'Azure 11%' },
      { Value: 18, Label: 'Other', Summary: 'Other 18%' },
    ];
  }

  public OnSliceClick(e: any) {
    if (e.args.isSelected) {
      this.selectedSliceLabel = this.data[e.args.index].Label;
      this.selectedSliceValue = this.data[e.args.index].Value + '%';
    } else {
      this.selectedSliceLabel = 'No Selection';
      this.selectedSliceValue = '0%';
    }
  }

  public ngAfterViewInit(): void {}
}
