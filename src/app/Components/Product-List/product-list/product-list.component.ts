import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from 'src/app/servives/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  Title: string = 'Products';
  ratings: string = 'Product rating';
  private _filterlist: string = '';
  get filterlist(): string {
    return this._filterlist;
  }

  set filterlist(value: string) {
    this._filterlist = value;
    console.log('In setter', value);
    this.filteredProducts = this.performFilter(value);
  }

  showImages: boolean = true;
  imageWidth: number = 50;
  imageMargin: number = 2;
  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];

  constructor(private api: ProductService) {}

  performFilter(value: string): IProduct[] {
    value = value.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.title.toLocaleLowerCase().includes(value)
    );
  }

  ngOnInit(): void {
    this.api.getProducts().subscribe((data) => {
      console.log(data);
      this.products = data;
      this.filteredProducts = this.products;

    });
  }

  toggleImages() {
    this.showImages = !this.showImages;
  }
  onRatingClicked(message: string): void {
    this.ratings = message;
    // const od = this.products.filter((product: IProduct) => {
    //   product.productName;
    // });
    // console.log(od);
  }
}
