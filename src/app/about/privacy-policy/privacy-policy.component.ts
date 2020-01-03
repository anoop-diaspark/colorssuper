import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {
  public privacyPolicy: Observable<any>
  constructor(private _adminservice: AdminService,private route: ActivatedRoute, private router : Router) { }

  ngOnInit() {
    const tree: UrlTree = this.router.parseUrl(this.router.url);
    console.log(tree,"tree value")
    this.getPrivacyPolicy(tree.root.children.primary.segments['0'].path)  
  }
  getPrivacyPolicy(slug:string){
    
    this._adminservice.footerAboutDetails(slug).subscribe(data => {
      this.privacyPolicy = data[0];
      console.log("privacyPolicy details", this.privacyPolicy)
    });
  }
  
}
