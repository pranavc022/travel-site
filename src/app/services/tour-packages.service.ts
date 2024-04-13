import { Injectable } from '@angular/core';
import { TourPackage } from '../model/tour-package';
@Injectable({
  providedIn: 'root'
})

export class TourPackagesService {
  private tours : TourPackage[] =  [
    {
      "regionId": "1",
      "packageId": "1",
      "packageName": "Mystical Himalayan Retreat",
      "countryName": "India",
      "costPerPerson": 1500,
      "adventureType": "Hill Stations",
      "description": "Experience the serene beauty and tranquility of the Himalayas in this mystical retreat."
    },
    {
      "regionId": "2",
      "packageId": "2",
      "packageName": "Amazon Rainforest Expedition",
      "countryName": "Brazil",
      "costPerPerson": 2000,
      "adventureType": "Wonders",
      "description": "Embark on an unforgettable journey deep into the heart of the Amazon Rainforest, where adventure awaits at every turn."
    },
    {
      "regionId": "3",
      "packageId":"3",
      "packageName": "Ancient Wonders of Egypt",
      "countryName": "Egypt",
      "costPerPerson": 1800,
      "adventureType": "Historical",
      "description": "Explore the enigmatic pyramids and temples of ancient Egypt, a land steeped in history and mystery."
    },
    {
      "regionId": "4",
      "packageId": "4",
      "packageName": "Alpine Adventure in Switzerland",
      "countryName": "Switzerland",
      "costPerPerson": 2500,
      "adventureType": "Hill Stations",
      "description": "Indulge in the breathtaking beauty of the Swiss Alps with thrilling adventures amidst picturesque landscapes."
    },
    {
      "regionId": "2",
      "packageId":"5",
      "packageName": "Grand Canyon Expedition",
      "countryName": "United States",
      "costPerPerson": 1800,
      "adventureType": "Desert Safari",
      "description": "Discover the awe-inspiring beauty of the Grand Canyon on an unforgettable expedition through one of the world's most iconic natural wonders."
    },
    {
      "regionId": "3",
      "packageId": "6",
      "packageName": "Dubai Desert Safari",
      "countryName": "UAE",
      "costPerPerson": 1200,
      "adventureType": "Desert Safari",
      "description": "Embark on a thrilling desert safari in Dubai, where you'll experience the excitement of dune bashing, camel riding, and traditional entertainment."
    },
    {
      "regionId": "4",
      "packageId": "7",
      "packageName": "Magical Venice Experience",
      "countryName": "Italy",
      "costPerPerson": 2200,
      "adventureType": "Historical",
      "description": "Immerse yourself in the romance and history of Venice as you explore its charming canals, magnificent palaces, and iconic landmarks."
    },
    {
      "regionId":"1",
      "packageId": "8",
      "packageName": "Great Wall Trekking Adventure",
      "countryName": "China",
      "costPerPerson": 1900,
      "adventureType": "Wonders",
      "description": "Embark on a once-in-a-lifetime trekking adventure along the ancient Great Wall of China, one of the world's most iconic wonders."
    },
    {
      "regionId": "1",
      "packageId": "9",
      "packageName": "Rajasthan Desert Safari",
      "countryName": "India",
      "costPerPerson": 1300,
      "adventureType": "Desert Safari",
      "description": "Experience the magic of Rajasthan with an exhilarating desert safari, where you'll journey across vast sand dunes and encounter the vibrant culture of this legendary land."
    },
    {
      "regionId": "4",
      "packageId": "10",
      "packageName": "Parisian Romance",
      "countryName": "France",
      "costPerPerson": 2400,
      "adventureType": "Historical",
      "description": "Fall in love with the enchanting city of Paris as you stroll along its iconic boulevards, visit world-famous landmarks, and savor the essence of romance in the City of Light."
    },
    {
      "regionId": "1",
      "packageId": "11",
      "packageName": "Jaipur Hill Station Retreat",
      "countryName": "India",
      "costPerPerson": 1500,
      "adventureType": "Hill Stations",
      "description": "Escape to the picturesque hill stations of Jaipur, where you'll be surrounded by lush greenery, majestic forts, and a rich tapestry of culture and history."
    },
    {
      "regionId": "4",
      "packageId": "12",
      "packageName": "Spectacular Santorini Getaway",
      "countryName": "Greece",
      "costPerPerson": 2300,
      "adventureType": "Wonders",
      "description": "Discover the breathtaking beauty of Santorini, with its iconic whitewashed buildings, stunning sunsets, and crystal-clear waters, on this unforgettable island getaway."
    },
    {
      "regionId": "3",
      "packageId": "13",
      "packageName": "Abu Dhabi Water Sports Extravaganza",
      "countryName": "UAE",
      "costPerPerson": 1600,
      "adventureType": "Water Sports",
      "description": "Dive into excitement with a thrilling array of water sports adventures in Abu Dhabi, where you'll experience the adrenaline rush of jet skiing, parasailing, and more."
    },
    {
      "regionId": "1",
      "packageId": "14",
      "packageName": "Enchanting Kyoto Experience",
      "countryName": "Japan",
      "costPerPerson": 2100,
      "adventureType": "Historical",
      "description": "Step back in time to ancient Japan as you explore the cultural treasures of Kyoto, from majestic temples and tranquil gardens to traditional tea houses and geisha districts."
    },
    {
      "regionId": "3",
      "packageId": "15",
      "packageName": "Istanbul Bosphorus Cruise",
      "countryName": "Turkey",
      "costPerPerson": 1700,
      "adventureType": "Wonders",
      "description": "Embark on a captivating journey along the Bosphorus Strait in Istanbul, where Europe and Asia meet, and marvel at the city's iconic landmarks, magnificent palaces, and bustling waterfront."
    }
  ];

  getTourPackages(regionId: string, costRange?: [number, number]): TourPackage[] {
    let filteredTours = this.tours.filter(tour => tour.regionId === regionId);
    if (costRange) {
      filteredTours = filteredTours.filter(tour => tour.costPerPerson >= costRange[0] && tour.costPerPerson <= costRange[1]);
    }
    return filteredTours;
  }
  

  constructor() { }
}
