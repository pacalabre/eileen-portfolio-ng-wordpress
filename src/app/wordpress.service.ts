import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WordpressService {
 
    posts = [];
 
    constructor(private http: HttpClient) { }
 
    getAllPosts() {
        this.http.get<any[]>('https://public-api.wordpress.com/wp/v2/sites/eileenconsedine.wordpress.com/posts?_embed', {
            params: {
                per_page: '100'
            }
        })
		.subscribe(response => {
			this.posts = response;
			return this.getPostsFromService();
		})
    }

	getPostsFromService() {
        return this.posts;
    }

    getPost(slug) {
     console.log(slug);
     return this.http.get<any[]>('https://public-api.wordpress.com/wp/v2/sites/eileenconsedine.wordpress.com/posts?_embed', {
            params: {
            slug: slug
         }
     })
    }

    getFeatured() {
     return this.http.get<any[]>('https://public-api.wordpress.com/wp/v2/sites/eileenconsedine.wordpress.com/posts?_embed', {
            params: {
             per_page: '100'
         }
     })
    }

    getPostsInCategory(){
     return this.http.get<any[]>('https://public-api.wordpress.com/wp/v2/sites/eileenconsedine.wordpress.com/posts?_embed', {
            params: {
             per_page: '100',
             // category: category
         }
     })
    }
}