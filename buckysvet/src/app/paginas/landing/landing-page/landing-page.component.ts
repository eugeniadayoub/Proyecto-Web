import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit, OnDestroy {
  images: string[] = [
    'assets/images/images-landing-page/Presentacion1.jpg',
    'assets/images/images-landing-page/presentacion2.jpg',
    'assets/images/images-landing-page/presentacion3.jpg',
    'assets/images/images-landing-page/presentacion4.jpg',
    'assets/images/images-landing-page/Presentacion5.png',
    'assets/images/images-landing-page/presentacion6.jpg',
    'assets/images/images-landing-page/Presentacion7.jpg',
    'assets/images/images-landing-page/Presentacion8.jpg',
    'assets/images/images-landing-page/presentacion9.jpg',
    'assets/images/images-landing-page/Presentacion10.jpg'
  ];

  currentIndex: number = 0;
  currentImage: string = this.images[0];
  intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.currentImage = this.images[this.currentIndex];
    }, 2000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  @ViewChild('contacto') contactoSection!: ElementRef;

  scrollToContacto() {
    const offset = 100; // Ajusta según el tamaño de tu header fijo
    const top = this.contactoSection.nativeElement.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top,
      behavior: 'smooth'
    });
  }
}