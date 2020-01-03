import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { Router } from '@angular/router';
import { DomSanitizer, SafeUrl, SafeStyle } from '@angular/platform-browser';
import { DataService } from '../service/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  header: any 
  head:any = []
  logo: any = []
  logourl: String
 shows : any = []
 imgshows:  any =[]
 Videos: any = []
 Super: any = []
 facebook: string = ''
 Twitter: any = []
 socialSite: any = []

  imgvideo: any= []

  moreshows = true;
 
  moreVideos = true;
  constructor(private _adminservice:AdminService,private router : Router,private sanitizer: DomSanitizer,private dataService : DataService) { 

      }
  
  
  ngOnInit() {
    this._adminservice.getall().subscribe(data => {
      this.header = data;
      this.head = data
 
      console.log("all details",this.head)
    });

    this._adminservice.getlogo().subscribe(data => {
      this.logo = data;
      console.log("logo details",this.logo)
    });
    this.getinstagram()
 
    this.getShows()
    this.getheadervideo()
  }


  getShows() {
    this._adminservice.getShow().subscribe(data => {
      this.imgshows = data;
      console.log("imgshows details", this.imgshows)
    });
  }
  getheadervideo() {
    this._adminservice.video().subscribe(data => {
      this.imgvideo = data;
      console.log("imgvideo details", this.imgvideo)
    });
  }


  getinstagram() {
    this._adminservice.socialSite().subscribe(data => {
      this.socialSite = data;
      console.log("Instagram details", this.socialSite)
    });
  }
  moreFictionData(num){
    if(num == 1){
      this.moreshows=false
    }
   else{
    this.moreVideos = false
   }
  }
  filterItemsOfType(type){
    return this.head.filter(x => x.menu_item_parent == type);
}
getImgContent(): SafeUrl {
  console.log("working")
  return this.sanitizer.bypassSecurityTrustUrl(this.facebook);
}
}
