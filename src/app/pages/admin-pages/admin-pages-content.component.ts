import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { DataService } from 'src/app/service/data.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-pages-content',
  templateUrl: './admin-pages-content.component.html',
  styleUrls: ['./admin-pages-content.component.css']
})
export class AdminPagesContentComponent implements OnInit {
  fictionData: any
  nonFictionData: any
  Gellaries: any
  header: any
  moreshows= true
  moreNonFictionImg = true
  sliders: any =[]
  slider1: any
  
  
  constructor(private dataService: DataService,private _adminservice: AdminService,private sanitizer: DomSanitizer,private router:Router){}

  ngOnInit() {
    this.fictionImg()
    this.nonFictionImg()
    this.galleryImg()
this.Slider()

 
  }
  carouselOptions = {
    margin: 25,
    nav: true,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsiveClass: true,
    responsive: {
      50: {
        items: 1,
        nav: true
      },
      51: {
        items: 1,
        nav: true
      },
      52: {
        items: 2,
        nav: true,
        loop: false
      },
      53: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  }
  fictionImg() {
    this._adminservice.getfictionData().subscribe(data => {
      this.fictionData = data;
      
      console.log("fictionData details", this.fictionData)
    });
  }

  onSearch(term:any) {
    this.dataService.sendMessageParam(term)
  }
  onSearchslider(term:any) {
   console.log(term)
   for(let img of this.fictionData){
if(img.slug == term){
console.log(img,":if condition ")
this.dataService.sendMessageParam(img)
}
else{
  for(let img of this.nonFictionData){
    if(img.slug == term){
      console.log(img,":else condition ")
this.dataService.sendMessageParam(img)
    }
  }

}
   }
  }
  nonFictionImg() {
    this._adminservice.getNonFictionData().subscribe(data => {
      this.nonFictionData = data;
      console.log("nonFictionData details", this.nonFictionData)
    });
  }
  galleryImg() {
    this._adminservice.getGalleryData().subscribe(data => {
      this.Gellaries = data;
      console.log("Gallery details", this.Gellaries)
    });
  }



  Slider() {
    this._adminservice.footerSlider().subscribe(data => {
      this.sliders = data;
    
      this.slider1 = Object.keys( this.sliders).map(key => ({type: key, value:  this.sliders[key]}));
      console.log("slider",this.slider1 )
    });
  }
  getImgContent(v): SafeUrl {
    console.log("working")
    return this.sanitizer.bypassSecurityTrustUrl(v);
  }
  

  moreFictionData(num){
    if(num == 1){
      this.moreshows=false
    }
   else{
    this.moreNonFictionImg = false
   }
  }



}
