import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WordpressService } from '../../wordpress.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  categories=[];
  categoryPosts=[];
  posts = [];
  aboutText = [];

  constructor(private wp: WordpressService) {
    this.posts = this.wp.getPostsFromService();
  }

  ngDoCheck() {
    this.posts = this.wp.getPostsFromService();
    this.posts.forEach(post => {
      let categoryName = post['_embedded']['wp:term'][1][0].slug;
      if(categoryName !== 'about'){
        if (!this.categories.includes(categoryName)) {
          let categoryLogo = post['_embedded']['wp:featuredmedia'][0].link;
          this.categories.push(categoryName);
          this.categoryPosts.push(post);
          console.log(this.categoryPosts);
        }
      } else {
        this.aboutText.push(post.content.rendered);
      }
    })
  }
}