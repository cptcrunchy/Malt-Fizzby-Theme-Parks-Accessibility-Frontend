import { Component, Input } from '@angular/core';
import type { Park } from 'app/types';


@Component({
  selector: 'app-park-preview',
  templateUrl: './park-preview.component.html',
  styleUrls: ['./park-preview.component.css']
})
export class ParkPreviewComponent {
  @Input() park: Park | undefined; // Declare park as Input
}
