import {AfterViewInit, Component} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  imports: [
    RouterLink
  ],
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.scss'
})
export class NotFoundPageComponent implements AfterViewInit {

  private y1 = 160;
  private y2 = 100;
  private y3 = 100;

  private y1Forward = true;
  private y2Forward = false;
  private y3Forward = true;

  ngAfterViewInit(): void {
    this.drawVisor();
    this.animate();
  }

  private drawVisor(): void {
    console.log('drawVisor');
    const canvas = document.getElementById('visor') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.beginPath();
    ctx.moveTo(5, 45);
    ctx.bezierCurveTo(15, 64, 45, 64, 55, 45);
    ctx.lineTo(55, 20);
    ctx.bezierCurveTo(55, 15, 50, 10, 45, 10);
    ctx.lineTo(15, 10);
    ctx.bezierCurveTo(15, 10, 5, 10, 5, 20);
    ctx.lineTo(5, 45);

    ctx.fillStyle = '#2f3640';
    ctx.strokeStyle = '#f5f6fa';
    ctx.fill();
    ctx.stroke();
  }

  private animate(): void {
    console.log('animate');
    const canvas = document.getElementById('cord') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animateFrame = () => {
      requestAnimationFrame(animateFrame);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      ctx.moveTo(130, 170);
      ctx.bezierCurveTo(250, this.y1, 345, this.y2, 400, this.y3);

      ctx.strokeStyle = 'white';
      ctx.lineWidth = 8;
      ctx.stroke();

      this.updatePositions();
    };
    animateFrame();
  }

  private updatePositions(): void {
    if (this.y1 === 100) this.y1Forward = true;
    if (this.y1 === 300) this.y1Forward = false;
    if (this.y2 === 100) this.y2Forward = true;
    if (this.y2 === 310) this.y2Forward = false;
    if (this.y3 === 100) this.y3Forward = true;
    if (this.y3 === 317) this.y3Forward = false;

    this.y1Forward ? this.y1++ : this.y1--;
    this.y2Forward ? this.y2++ : this.y2--;
    this.y3Forward ? this.y3++ : this.y3--;
  }
}
