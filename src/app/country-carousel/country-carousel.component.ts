import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-country-carousel',
  templateUrl: './country-carousel.component.html',
  styleUrls: ['./country-carousel.component.css'] 
})
export class CountryCarouselComponent implements OnInit, OnDestroy {
  images: string[] = [
    'https://static.vecteezy.com/system/resources/previews/001/116/378/large_2x/beijing-great-wall-of-china-photo.jpg', 
    'https://th.bing.com/th/id/R.58d7487a920013a0117c85cded1023a9?rik=UB486bFnTaXTWQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fb%2f4%2f6%2f1126902-beautiful-hd-wallpaper-of-india-2800x2100-ios.jpg&ehk=OiEuJbbyEj5jqSFHgjTgDUm3FE8vntthC3dtTifmaPI%3d&risl=&pid=ImgRaw&r=0', 
    'https://th.bing.com/th/id/OIP.3nV7uthpIj9rBZojEBArfAHaNK?rs=1&pid=ImgDetMain',
    'https://r1.ilikewallpaper.net/iphone-wallpapers/download/98355/Venice-HD-Backgrounds-iphone-wallpaper-ilikewallpaper_com.jpg',
    'https://www.hdwallpapers.in/download/dubai_night_cityscape_4k-1080x1920.jpg',
    'https://th.bing.com/th/id/R.7c410cbc521962574e9126f4bf0c61f1?rik=dk%2bRMrGRX1jQ8Q&riu=http%3a%2f%2fqatarairways.com%2fcontent%2fdam%2fimages%2frenditions%2fvertical%2fdestinations%2fsaudi-arabia%2friyadh%2fv-riyadh-skyline2.jpg&ehk=70hpgmVxDF5n7Gk9z5sdbgnm%2bfsw%2fWMnIsbDEvSVAiM%3d&risl=&pid=ImgRaw&r=0',
    'https://i.pinimg.com/originals/1e/37/81/1e3781df3bff2dd3ea0a14dde18479fc.jpg',
    'https://www.tourist-destinations.com/wp-content/uploads/2014/04/c82c37ac57432f7d338f11bc8076e6f6.jpg'
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
