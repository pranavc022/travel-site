import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-country-carousel',
  templateUrl: './country-carousel.component.html',
  styleUrls: ['./country-carousel.component.css'] 
})
export class CountryCarouselComponent implements OnInit, OnDestroy {
  images: string[] = [
    'https://static.vecteezy.com/system/resources/previews/001/116/378/large_2x/beijing-great-wall-of-china-photo.jpg', 
    'https://wallpaperaccess.com/full/8231407.jpg', 
    'https://i.pinimg.com/originals/09/0c/6e/090c6e54764437fc0bc456c3acea2a25.jpg',
    'https://r1.ilikewallpaper.net/ipad-wallpapers/download/16589/Venice-Italy-ipad-wallpaper-ilikewallpaper_com.jpg',
    'https://www.wakdxbllc.com/img/duba.jpeg',
    'https://th.bing.com/th/id/R.055dc755db81efb08c2be1a73c9aa1ed?rik=3tU1k9qpKzouew&riu=http%3a%2f%2fim.rediff.com%2fmoney%2f2014%2fmar%2f10cheapest-cities2.jpg&ehk=clN%2fe2caRc81FG7u%2fgQ4idXLRn6%2b3LM%2fgsVX8e7M6dY%3d&risl=&pid=ImgRaw&r=0',
    'https://w0.peakpx.com/wallpaper/51/723/HD-wallpaper-statue-of-liberty-clouds-liberty-new-york-sky-statue.jpg',
    'https://i.pinimg.com/originals/6f/bc/b6/6fbcb6c3b964126a9cb11356df3695e3.jpg'
  ];
  
  currentImageIndex: number = 0;
  autoSlideInterval: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextImage();
    }, 5000); // Images will change every 5 seconds
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  previousImage(): void {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }
}
