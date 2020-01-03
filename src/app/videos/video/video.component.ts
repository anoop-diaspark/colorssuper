import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
videoBehindTheSecenes : Observable<any>
  constructor(private _adminservice: AdminService,) { }

  ngOnInit() {
    this.videoBehindTheSecene()
  }
  videoBehindTheSecene() {
    this._adminservice.getVideoBehindTheScene().subscribe(data => {
      this.videoBehindTheSecenes = data;
      console.log("videoBehindTheSecenes details", this.videoBehindTheSecenes)
    });
  }
}
