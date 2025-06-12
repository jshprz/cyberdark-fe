import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-base-list-card',
  imports: [CommonModule],
  templateUrl: './base-list-card.component.html',
  styleUrl: './base-list-card.component.css',
})
export class BaseListCardComponent {
  @Input() title!: string;
  @Input() listItems: string[] = [];
  @Input() listKeyValueItems?: { label: string; value: string }[];
  @Input() isKeyValueList: boolean = false;
}
