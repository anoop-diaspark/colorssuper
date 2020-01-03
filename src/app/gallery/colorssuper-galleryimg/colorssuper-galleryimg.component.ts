import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-colorssuper-galleryimg',
  templateUrl: './colorssuper-galleryimg.component.html',
  styleUrls: ['./colorssuper-galleryimg.component.css']
})
export class ColorssuperGalleryimgComponent implements OnInit {
  showvideoslider: any = []
  Gellaries: any
  constructor(private _adminservice: AdminService,) { }

  ngOnInit() {
    this.galleryImg()
    this.getShowvideoslider()
  }
  galleryImg() {
    this._adminservice.getGalleryData().subscribe(data => {
      this.Gellaries = data;
      console.log("Gallery details", this.Gellaries)
    });
  }
  getShowvideoslider() {
    this._adminservice.getShowvideoslider().subscribe(data => {
      this.showvideoslider = data;
      console.log("showvideoslider details", this.showvideoslider)
    });
  }
}
