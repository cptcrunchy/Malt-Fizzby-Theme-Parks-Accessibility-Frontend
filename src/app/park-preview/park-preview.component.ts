import { Component, Input } from '@angular/core';


export type Park = {
  id: number;
  name: String;
  imageUrl: String;
  description: String;
  latitude: number;
  longitude: number;
}


@Component({
  selector: 'app-park-preview',
  templateUrl: './park-preview.component.html',
  styleUrls: ['./park-preview.component.css']
})
export class ParkPreviewComponent {
  @Input() park: Park | undefined; // Declare park as Input
}