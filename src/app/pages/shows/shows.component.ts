import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/service/admin.service';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit, OnDestroy {
  messages: any[] = [];
  subscription: Subscription;
  pathparam:any
  peryticularShowData: any;
  shows: any;
  showvideoslider: any = []
  public showbyslug: any
  private sub: any;
  id: any;
 
  constructor(private dataService : DataService,private _adminservice: AdminService,private route: ActivatedRoute){

  }
      slides: any = [[]];
      chunk(arr, chunkSize) {
        let R = [];
        for (let i = 0, len = arr.length; i < len; i += chunkSize) {
          R.push(arr.slice(i, i + chunkSize));
        }
        return R;
      }
  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = params['term']; // (+) converts string 'id' to a number
      this.getShowBySlug(this.id)  
      // In a real app: dispatch action to load the details here.
   });
    // const id: Observable<string> = this.route.params.pipe(map(p => p.id));
    
    // console.log(id.source['_value'].term,"id value")

 
  this.getshows()
  this.getShowvideoslider()
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  // async doSomething(slug:string) {
  //   this.relay = "Waiting...";
  //   this.showbyslug = "";
  //   this.showbyslug = await this._adminservice.getShowBySlug(slug)
  //   console.log("ShowBySlug details", this.showbyslug)
  //   this.relay = "called";
  // }
  getShowBySlug(slug:string){
    
    this._adminservice.getShowBySlug(slug).then(data => {
      this.showbyslug = data[0];
      console.log("ShowBySlug details", this.showbyslug)
    });
  }
  
  getshows() {
    this._adminservice.getShow().subscribe(data => {
      this.shows = data;
      console.log("show details", this.shows)
      this.slides = this.chunk(this.shows, 3);
    });
  }

  getShowvideoslider() {
    this._adminservice.getShowvideoslider().subscribe(data => {
      this.showvideoslider = data;
      console.log("showvideoslider details", this.showvideoslider)
    });
  }
  
}
