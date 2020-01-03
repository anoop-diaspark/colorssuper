import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  URL = `http://localhost:8080/colorssuper/wp-json/wp/v2/`;
 
  constructor(private http : HttpClient) { }



  async getShowBySlug(slug:string):Promise<any>{
    
   let response = await this.http.get<any>(`${this.URL}shows?slug=${slug}`).pipe(
    delay( 300 )
).toPromise();
console.log(response)
    return response;
  } 
  async getGalleryBySlug(slug:string):Promise<any>{
    
    let response = await this.http.get<any>(`${this.URL}gallery?slug=${slug}`).toPromise()
 console.log(response)
     return response;
   } 
  getShow():Observable<any>{
  
    return this.http.get<any>(`${this.URL}shows?_embed&order=asc`);
  }
  getVideoBehindTheScene():Observable<any>{
  
    return this.http.get<any>(`${this.URL}video?_embed&video_category=32`);
  }

getTexonomyshowtype():Observable<any>{
  
    return this.http.get<any>(`${this.URL}shows_type`);
  }

  getShowsDataByshowtypeAndshowgenres(showtype,show_genres):Observable<any>{
  
    return this.http.get<any>(`${this.URL}shows?_embed&shows_type=${showtype}&show_genres=${show_genres}&order=asc`);
  }
  getTexonomyshowgenres():Observable<any>{
  
    return this.http.get<any>(`${this.URL}show_genres?lang = en&order=desc`);
  }

  footerAboutDetails(slug:string):Observable<any>{
  
    return this.http.get<any>(`${this.URL}pages?slug=${slug}`);
  }
  headerVideo():Observable<any>{
  
    return this.http.get<any>(`${this.URL}shows?shows_type=123`);
  }
  getShowvideoslider(){
  
    return this.http.get<any>(`${this.URL}video?_embed&video_category=35&order=asc`);
  }
  getfictionData(){
  
    return this.http.get<any>(`${this.URL}shows?_embed&show_genres=115`);
  }

  getNonFictionData(){
    return this.http.get<any>(`${this.URL}shows?_embed&show_genres=188`);
  }

  getGalleryData(){
    return this.http.get<any>(`${this.URL}gallery?_embed&per_page=3&order=asc`);
  }
  
  getall(){
    return this.http.get<any>(`${this.URL}menu`);
  }
  getlogo(){
    return this.http.get<any>(`${this.URL}logo`);
  }
  footerVideos(){
    return this.http.get<any>(`${this.URL}menu1`);
  }
  footerShows(){
    return this.http.get<any>(`${this.URL}menu2`);
  }
  footerSuper(){
    return this.http.get<any>(`${this.URL}menu3`);
  }
  footerSlider(){
    return this.http.get<any>(`${this.URL}slider`);
  }
 
  socialSite(){
    return this.http.get<any>(`${this.URL}instagram`);
  }

  video(){
    return this.http.get<any>(`${this.URL}video?_embed&order=asc`);
  }
}
 