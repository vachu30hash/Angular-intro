import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from 'src/app/models/types';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product:any;
  constructor(public router:Router,public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  changeRoute(){
    this.router.navigate(['details'],{relativeTo:this.route,state:this.product});
  }
}
