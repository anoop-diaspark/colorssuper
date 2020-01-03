import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { AdminService } from '../service/admin.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  shows: any = []
 
  Videos: any = []
  Super: any = []
  messages: any[] = [];
  subscription: Subscription;
 
  constructor(private dataService: DataService,private _adminservice: AdminService) { 
    this.subscription = this.dataService.getMessage().subscribe(message => {
      if (message) {
      this.messages.push(message);
    //   this.viacome = message.text[0].url
    //  console.log(this.viacome ,"<---texturl");
  
      } else {
      // clear messages when empty message receive
     this.messages = [];
  }
})
    }

    ngOnDestroy(){
      this.subscription.unsubscribe();
    }

  ngOnInit() {
    this.footerShows()
    this.footerSuper()
    this.footerVideos()
  }
  footerVideos() {
    this._adminservice.footerShows().subscribe(data => {
      this.Videos = data;
      console.log("footer Videos details", this.Videos)
    });
  }
  footerShows() {
    this._adminservice.footerSuper().subscribe(data => {
      this.Super = data;
      console.log(" footer Super details", this.Super)
    });
  }
  footerSuper() {
    this._adminservice.footerVideos().subscribe(data => {
      this.shows = data;
      console.log("footer  shows details", this.shows)
    });
  }
}
