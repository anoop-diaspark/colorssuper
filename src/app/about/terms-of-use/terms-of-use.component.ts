import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-terms-of-use',
  templateUrl: './terms-of-use.component.html',
  styleUrls: ['./terms-of-use.component.css']
})
export class TermsOfUseComponent implements OnInit {
  public termUseage: Observable<any>
  constructor(private _adminservice: AdminService,private route: ActivatedRoute, private router : Router) { }

  ngOnInit() {
    const tree: UrlTree = this.router.parseUrl(this.router.url);
    console.log(tree,"tree value")
    this.getTermsOfUseageBySlug(tree.root.children.primary.segments['0'].path)  
  }
  getTermsOfUseageBySlug(slug:string){
    
    this._adminservice.footerAboutDetails(slug).subscribe(data => {
      this.termUseage = data[0];
      console.log("termUseage details", this.termUseage)
    });
  }
  
}
