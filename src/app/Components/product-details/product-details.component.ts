import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/servives/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  marginLeftValue: string = '270px';
  marginTopValue: string = '-180px';
  imageWidth: number = 100;
  ratings: string = 'Click Start to See Ratings of this Product';
  constructor(
    private route: ActivatedRoute,
    private api: ProductService,
    private router: Router
  ) {}
  arry: any = [];
  product: any = [];

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const user = this.api.getProducts().subscribe((data) => {
      const target = data.find((res: { id: number }) => res.id === id);
      console.log(target);
      this.product = target;
    });
  }
  onRatingClicked(message: string): void {
    this.ratings = message;
    // const od = this.products.filter((product: IProduct) => {
    //   product.productName;
    // });
    // console.log(od);
  }
  
  onBack() {
    this.router.navigate(['./products']);
  }
 
}
