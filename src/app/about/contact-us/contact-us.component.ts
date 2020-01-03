import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  public contactUs: Observable<any>
  
  constructor(private _adminservice: AdminService,private router : Router) { }

  ngOnInit() {
   
   const tree: UrlTree = this.router.parseUrl(this.router.url);
   console.log(tree,"tree value")
   this.getContactUsBySlug(tree.root.children.primary.segments['0'].path)  
  }
  getContactUsBySlug(slug:string){
   
    this._adminservice.footerAboutDetails(slug).subscribe(data => {
      this.contactUs = data;
      console.log("contactUs details", this.contactUs)
    });
  }
  
}
