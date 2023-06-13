import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from 'src/app/models/types';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  state?:any;
  qty:any=1;
  buttonstatus:string="Add to the Cart";
  active:boolean=true;

  constructor(private route:ActivatedRoute,private router:Router) { 
    this.state=this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {
  }

}
