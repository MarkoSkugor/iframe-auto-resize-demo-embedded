import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { DocumentResizeMessageService } from './document-resize-message.service';

@Component({
  selector: 'my-app',
  standalone: true,
  styles: [
    `
    :host {
      background: palegoldenrod;
      display: block;
      padding: 1rem;
    }

    .button-container {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
  `,
  ],
  imports: [CommonModule],
  template: `
    <div class="button-container">
      <button (click)="increaseHeight()">Increase Height</button>
      <button (click)="decreaseHeight()">Decrease Height</button>
      <button (click)="increaseWidth()">Increase Width</button>
      <button (click)="decreaseWidth()">Decrease Width</button>
    </div>
    <div [ngStyle]="{ 'height.px': height, 'width.px': width }"></div>
  `,
})
export class App {
  height = 0;
  width = 0;

  constructor(documentResizeMessageService: DocumentResizeMessageService) {
    documentResizeMessageService.init();
  }

  increaseHeight() {
    this.height = this.height + 50;
  }

  decreaseHeight() {
    this.height = this.height === 0 ? 0 : this.height - 50;
  }

  increaseWidth() {
    this.width = this.width + 50;
  }

  decreaseWidth() {
    this.width = this.width === 0 ? 0 : this.width - 50;
  }
}

bootstrapApplication(App);
