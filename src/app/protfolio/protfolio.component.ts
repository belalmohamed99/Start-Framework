import { Component } from '@angular/core';

@Component({
  selector: 'app-protfolio',
  imports: [],
  templateUrl: './protfolio.component.html',
  styleUrl: './protfolio.component.css',
})
export class ProtfolioComponent {
  isHidden: boolean = true;
  modelImg: string = '';
  hideModel(eleTraget: EventTarget | null, imgRef: HTMLImageElement): void {
    if (eleTraget == imgRef) {
      return;
    } else {
      this.isHidden = true;
    }
  }

  imgsrc: string[] = [
    './imges/poert1.png',
    './imges/port2.png',
    './imges/port3.png',
    './imges/port3.png',
    './imges/poert1.png',
    './imges/port2.png',
  ];
}
