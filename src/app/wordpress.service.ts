
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

    constructor(private http: HttpClient) { }

	getAllPosts(): Observable<any[]> {
	    return this.http.get<any[]>('http://theemmadilemma.com//wp-json/wp/v2/posts?_embed', {
		        params: {
		        per_page: '100'
	    	}
	  	})
	}

	getPost(slug){
		console.log(slug);
		return this.http.get<any[]>('http://theemmadilemma.com//wp-json/wp/v2/posts?_embed', {
	        params: {
	        slug: slug
    	})
	}

}