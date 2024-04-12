import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TourPackagesService {
  tours = [
    {
      "region-id": 1,
      "Package-id": 1,
      "Package-Name": "Mystical Himalayan Retreat",
      "country-name": "India",
      "Cost-per-person": 1500,
      "Adventure-type": "Hill Stations",
      "Description": "Experience the serene beauty and tranquility of the Himalayas in this mystical retreat."
    },
    {
      "region-id": 2,
      "Package-id": 2,
      "Package-Name": "Amazon Rainforest Expedition",
      "country-name": "Brazil",
      "Cost-per-person": 2000,
      "Adventure-type": "Wonders",
      "Description": "Embark on an unforgettable journey deep into the heart of the Amazon Rainforest, where adventure awaits at every turn."
    },
    {
      "region-id": 3,
      "Package-id": 3,
      "Package-Name": "Ancient Wonders of Egypt",
      "country-name": "Egypt",
      "Cost-per-person": 1800,
      "Adventure-type": "Historical",
      "Description": "Explore the enigmatic pyramids and temples of ancient Egypt, a land steeped in history and mystery."
    },
    {
      "region-id": 4,
      "Package-id": 4,
      "Package-Name": "Alpine Adventure in Switzerland",
      "country-name": "Switzerland",
      "Cost-per-person": 2500,
      "Adventure-type": "Hill Stations",
      "Description": "Indulge in the breathtaking beauty of the Swiss Alps with thrilling adventures amidst picturesque landscapes."
    },
    {
      "region-id": 2,
      "Package-id": 5,
      "Package-Name": "Grand Canyon Expedition",
      "country-name": "United States",
      "Cost-per-person": 1800,
      "Adventure-type": "Desert Safari",
      "Description": "Discover the awe-inspiring beauty of the Grand Canyon on an unforgettable expedition through one of the world's most iconic natural wonders."
    },
    {
      "region-id": 3,
      "Package-id": 6,
      "Package-Name": "Dubai Desert Safari",
      "country-name": "UAE",
      "Cost-per-person": 1200,
      "Adventure-type": "Desert Safari",
      "Description": "Embark on a thrilling desert safari in Dubai, where you'll experience the excitement of dune bashing, camel riding, and traditional entertainment."
    },
    {
      "region-id": 4,
      "Package-id": 7,
      "Package-Name": "Magical Venice Experience",
      "country-name": "Italy",
      "Cost-per-person": 2200,
      "Adventure-type": "Historical",
      "Description": "Immerse yourself in the romance and history of Venice as you explore its charming canals, magnificent palaces, and iconic landmarks."
    },
    {
      "region-id": 1,
      "Package-id": 8,
      "Package-Name": "Great Wall Trekking Adventure",
      "country-name": "China",
      "Cost-per-person": 1900,
      "Adventure-type": "Wonders",
      "Description": "Embark on a once-in-a-lifetime trekking adventure along the ancient Great Wall of China, one of the world's most iconic wonders."
    },
    {
      "region-id": 1,
      "Package-id": 9,
      "Package-Name": "Rajasthan Desert Safari",
      "country-name": "India",
      "Cost-per-person": 1300,
      "Adventure-type": "Desert Safari",
      "Description": "Experience the magic of Rajasthan with an exhilarating desert safari, where you'll journey across vast sand dunes and encounter the vibrant culture of this legendary land."
    },
    {
      "region-id": 4,
      "Package-id": 10,
      "Package-Name": "Parisian Romance",
      "country-name": "France",
      "Cost-per-person": 2400,
      "Adventure-type": "Historical",
      "Description": "Fall in love with the enchanting city of Paris as you stroll along its iconic boulevards, visit world-famous landmarks, and savor the essence of romance in the City of Light."
    },
    {
      "region-id": 1,
      "Package-id": 11,
      "Package-Name": "Jaipur Hill Station Retreat",
      "country-name": "India",
      "Cost-per-person": 1500,
      "Adventure-type": "Hill Stations",
      "Description": "Escape to the picturesque hill stations of Jaipur, where you'll be surrounded by lush greenery, majestic forts, and a rich tapestry of culture and history."
    },
    {
      "region-id": 4,
      "Package-id": 12,
      "Package-Name": "Spectacular Santorini Getaway",
      "country-name": "Greece",
      "Cost-per-person": 2300,
      "Adventure-type": "Wonders",
      "Description": "Discover the breathtaking beauty of Santorini, with its iconic whitewashed buildings, stunning sunsets, and crystal-clear waters, on this unforgettable island getaway."
    },
    {
      "region-id": 3,
      "Package-id": 13,
      "Package-Name": "Abu Dhabi Water Sports Extravaganza",
      "country-name": "UAE",
      "Cost-per-person": 1600,
      "Adventure-type": "Water Sports",
      "Description": "Dive into excitement with a thrilling array of water sports adventures in Abu Dhabi, where you'll experience the adrenaline rush of jet skiing, parasailing, and more."
    },
    {
      "region-id": 1,
      "Package-id": 14,
      "Package-Name": "Enchanting Kyoto Experience",
      "country-name": "Japan",
      "Cost-per-person": 2100,
      "Adventure-type": "Historical",
      "Description": "Step back in time to ancient Japan as you explore the cultural treasures of Kyoto, from majestic temples and tranquil gardens to traditional tea houses and geisha districts."
    },
    {
      "region-id": 3,
      "Package-id": 15,
      "Package-Name": "Istanbul Bosphorus Cruise",
      "country-name": "Turkey",
      "Cost-per-person": 1700,
      "Adventure-type": "Wonders",
      "Description": "Embark on a captivating journey along the Bosphorus Strait in Istanbul, where Europe and Asia meet, and marvel at the city's iconic landmarks, magnificent palaces, and bustling waterfront."
    }
  ]
  

  constructor() { }
}
