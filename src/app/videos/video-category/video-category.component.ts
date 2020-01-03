import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-video-category',
  templateUrl: './video-category.component.html',
  styleUrls: ['./video-category.component.css']
})
export class VideoCategoryComponent implements OnInit {
  showvideoslider: any = []
  constructor(private _adminservice: AdminService,) { }

  ngOnInit() {
    this.getShowvideoslider()
  }
  getShowvideoslider() {
    this._adminservice.getShowvideoslider().subscribe(data => {
      this.showvideoslider = data;
      console.log("showvideoslider details", this.showvideoslider)
    });
  }
}
