import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  backgroundImageUrl = 'assets/image/vong-xoay-thoi-gian.png'; // ảnh mặc định

  changeBackground(imageUrl: string): void {
    this.backgroundImageUrl = imageUrl;
  }

  getBackgroundStyle(): string {
    return `url('${this.backgroundImageUrl}')`;
  }
}