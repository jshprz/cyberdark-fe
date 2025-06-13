import { Component, AfterViewInit, ViewChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IgxGeographicMapModule,
  IgxGeographicMapComponent,
  IgxGeographicProportionalSymbolSeriesComponent,
} from 'igniteui-angular-maps';

import {
  IgxDataChartInteractivityModule,
  IgxSizeScaleComponent,
  IgxValueBrushScaleComponent,
  MarkerType,
} from 'igniteui-angular-charts';

import { IgxShapeDataSource } from 'igniteui-angular-core';
import { WorldLocations } from '../../../data/world-locations.data';

@Component({
  selector: 'app-geo-map-card',
  standalone: true,
  imports: [CommonModule, FormsModule, IgxGeographicMapModule, IgxDataChartInteractivityModule],
  templateUrl: './geo-map-card.component.html',
  styleUrls: ['./geo-map-card.component.css'],
})
export class GeoMapCardComponent implements AfterViewInit {
  @ViewChild('map', { static: true })
  public map?: IgxGeographicMapComponent;

  @ViewChild('template', { static: true })
  public tooltipTemplate?: TemplateRef<object>;

  public ngAfterViewInit(): void {
    const sds = new IgxShapeDataSource();
    sds.importCompleted.subscribe(() => this.onDataLoaded(sds));
    sds.shapefileSource = 'https://static.infragistics.com/xplatform/shapes/WorldTemperatures.shp';
    sds.databaseSource = 'https://static.infragistics.com/xplatform/shapes/WorldTemperatures.dbf';
    sds.dataBind();
  }

  private onDataLoaded(sds: IgxShapeDataSource): void {
    const shapeRecords = sds.getPointData();
    const contourPoints: any[] = [];

    for (const record of shapeRecords) {
      const temp = record.fieldValues.Contour;
      if (temp % 10 === 0 && temp >= 0) {
        for (const shapes of record.points) {
          for (let i = 0; i < shapes.length; i++) {
            if (i % 5 === 0) {
              const p = shapes[i];
              contourPoints.push({ lon: p.x, lat: p.y, value: temp });
            }
          }
        }
      }
    }

    this.addSeriesWith(WorldLocations.getAll());
  }

  private addSeriesWith(locations: any[]): void {
    const sizeScale = new IgxSizeScaleComponent();
    sizeScale.minimumValue = 4;
    sizeScale.maximumValue = 60;

    const brushScale = new IgxValueBrushScaleComponent();
    brushScale.brushes = [
      'rgba(14, 194, 14, 0.4)',
      'rgba(252, 170, 32, 0.4)',
      'rgba(252, 32, 32, 0.4)',
    ];
    brushScale.minimumValue = 0;
    brushScale.maximumValue = 30;

    const symbolSeries = new IgxGeographicProportionalSymbolSeriesComponent();
    symbolSeries.dataSource = locations;
    symbolSeries.markerType = MarkerType.Circle;
    symbolSeries.radiusScale = sizeScale;
    symbolSeries.fillScale = brushScale;
    symbolSeries.fillMemberPath = 'pop';
    symbolSeries.radiusMemberPath = 'pop';
    symbolSeries.latitudeMemberPath = 'lat';
    symbolSeries.longitudeMemberPath = 'lon';
    symbolSeries.markerOutline = 'rgba(0,0,0,0.3)';
    symbolSeries.tooltipTemplate = this.tooltipTemplate!;

    this.map?.series.add(symbolSeries);
  }
}
