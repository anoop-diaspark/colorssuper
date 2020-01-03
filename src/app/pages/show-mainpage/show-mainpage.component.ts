import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-show-mainpage',
  templateUrl: './show-mainpage.component.html',
  styleUrls: ['./show-mainpage.component.css']
})
export class ShowMainpageComponent implements OnInit {

  showvideosliderPromos : Observable<any>
  showstype : any = []
  showsgeners:  Observable<any>
  stateshowtype: any;
  stateshowgener: any;
  categoryData: any = []
  constructor(private _adminservice: AdminService,) { }

  ngOnInit() {
    this.getTexonomyshowtype()
    this.getTexonomyshowgenres()
 this.getTaxonomyDataOnInit()
 this. getShowvideoslider()
  }
  getTexonomyshowgenres() {
    this._adminservice.getTexonomyshowgenres().subscribe(data => {
      this.showsgeners = data;
      console.log("Texonomyshowgenres details", this.showsgeners)
    });
  }
  getTexonomyshowtype(){
    this._adminservice.getTexonomyshowtype().subscribe(data => {
     
      this.showstype = data
      console.log("Texonomyshowtype details", this.showstype)
    });
  }
  getTaxonomyDataOnInit(){
  
    this._adminservice.getShowsDataByshowtypeAndshowgenres( 121,'').subscribe(data => {
             
      this.categoryData = data
      console.log("categoryData details", this.categoryData)
    });
  }
getTaxonomyData(showtypevalue){
  this.stateshowgener =showtypevalue
  console.log(this.stateshowgener,"stateshowgeners")
  this._adminservice.getShowsDataByshowtypeAndshowgenres( this.stateshowgener,115).subscribe(data => {
           
    this.categoryData = data
    console.log("categoryData details", this.categoryData)
  });
}
  getState(event){
    this.stateshowtype=event
    this._adminservice.getShowsDataByshowtypeAndshowgenres(this.stateshowgener,121).subscribe(data => {
           
      this.categoryData = data
      console.log("categoryData details", this.categoryData)
    });
    
    console.log(this.stateshowtype)
  }

  getShowvideoslider() {
    this._adminservice.getShowvideoslider().subscribe(data => {
      this.showvideosliderPromos = data;
      console.log("showvideosliderPromos details", this.showvideosliderPromos)
    });
  }



}




