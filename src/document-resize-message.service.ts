import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DocumentResizeMessageService {
  private resizeObserver: ResizeObserver | undefined;

  init(): void {
    const html = document.querySelector('html');

    if (html && window.parent) {
      this.resizeObserver = new ResizeObserver(
        (entries: ResizeObserverEntry[]) => {
          window.parent.postMessage({
            type: 'content-resize',
            contentRect: entries[0].contentRect,
          });
        }
      );
      this.resizeObserver.observe(html);
    }
  }
}
