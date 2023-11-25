import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from 'src/app/servives/product.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
   product:any=[]
   test:any;
  constructor(private router:Router,private route:ActivatedRoute,private api:ProductService) { }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.test=id
    this.api.getProducts().subscribe((resp)=>{
      const target=resp.find((res: { id: number; })=>res.id===id)
      console.log(target)
      this.product=target
    })

  }
  goBack(){
  this.router.navigate([`products/${this.test}`])
  }
}
