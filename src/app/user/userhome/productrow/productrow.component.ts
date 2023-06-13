import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from 'src/app/models/types';

@Component({
  selector: 'app-productrow',
  templateUrl: './productrow.component.html',
  styleUrls: ['./productrow.component.css']
})
export class ProductrowComponent implements OnInit {

  @Input() products:any[]=[];
  @Input() producttitle:string="";
  constructor(public router:Router,public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  changeRoute(current:product){
    alert("event firing")
    this.router.navigate(['details'],{relativeTo:this.route,state:current});
  }

}
