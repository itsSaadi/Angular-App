import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  filterlist:string='Car';
  showImages: boolean = true;
  imageWidth: number = 50;
  imageMargin: number = 2;
  products: any = [
    {
      prodcutId: 1,
      imageUrl:
        'https://i1.wp.com/media.boingboing.net/wp-content/uploads/2014/08/claw_hammer.jpg',
      prodcutName: 'Hammer',
      prodcutCode: 'ABN-234',
      RelaeseDate: '12-09-2023',
      prodcutPrice: '27.439',
      prodcutRating: 4.5,
    },
    {
      prodcutId: 2,
      imageUrl:
        'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
      prodcutName: 'Car',
      prodcutCode: 'APN-204',
      RelaeseDate: '11-09-2023',
      prodcutPrice: '97.789',
      prodcutRating: 4.9,
    },
    {
      prodcutId: 3,
      imageUrl: 'https://pngimg.com/uploads/wallet/wallet_PNG7503.png',
      prodcutName: 'Wallet',
      prodcutCode: 'AVN-214',
      RelaeseDate: '02-09-2023',
      prodcutPrice: '60.432',
      prodcutRating: 4.3,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  toggleImages() {
    this.showImages = !this.showImages;
  }
}
