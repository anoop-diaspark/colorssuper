import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-galleryimg',
  templateUrl: './galleryimg.component.html',
  styleUrls: ['./galleryimg.component.css']
})
export class GalleryimgComponent implements OnInit, OnDestroy {

  galleryimages:any
  private sub: any;
  id: any;
  slugid : any
  showvideoslider: any = []
  public gallerybyslug: Observable<any>
  Gellaries: any = [];
  constructor(private _adminservice: AdminService,private route: ActivatedRoute) { 

  
    }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['slug']; // (+) converts string 'id' to a number
      console.log(this.id)
      this.getGalleryBySlug(this.id)  
          const id: Observable<string> = this.route.params.pipe(map(p => p.slug));
    this.slugid = id
    console.log(id)
      // In a real app: dispatch action to load the details here.
      this.getShowvideoslider()
      this.galleryImg()
   });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  getGalleryBySlug(slug:string){
    this._adminservice.getGalleryBySlug(slug).then(data => {
      this.gallerybyslug = data['0'].ACF.photo_gallery;
      console.log("gallerybyslugs details", this.gallerybyslug)
    });
  }
  
  getShowvideoslider() {
    this._adminservice.getShowvideoslider().subscribe(data => {
      this.showvideoslider = data;
      console.log("showvideoslider details", this.showvideoslider)
    });
  }
  galleryImg() {
    this._adminservice.getGalleryData().subscribe(data => {
      let i = 0
      data.forEach(element => {
        if(element.slug !=  this.slugid.source['_value'].slug){
     this.Gellaries[i] = element;
     i+=1
 }
      });
   
      console.log("Gellaries details", this.Gellaries)
    });
}
}
