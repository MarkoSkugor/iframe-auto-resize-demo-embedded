import { Component } from '@angular/core';
import { DocumentResizeMessageService } from './document-resize-message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  height = 0;
  width = 200;

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
    this.width = this.width === 200 ? 200 : this.width - 50;
  }
}
