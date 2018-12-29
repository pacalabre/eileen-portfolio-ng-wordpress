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
  posts = [];

  constructor(private wp: WordpressService) {
    this.posts = this.wp.getPostsFromService();
  }

  ngDoCheck() {
    this.posts = this.wp.getPostsFromService();
    this.posts.forEach(post => {
      let categoryName = post['_embedded']['wp:term'][0][0].slug;
      if (!this.categories.includes(categoryName)) {
        this.categories.push(categoryName);
      }
    })
    console.log(this.posts);
  }
}