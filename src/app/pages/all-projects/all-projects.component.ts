import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WordpressService } from '../.././wordpress.service';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.scss']
})

export class AllProjectsComponent {

  posts=[];
  posts$:Observable<any[]>;
  displayPosts = [];

  constructor(private wp: WordpressService) {
    // this.posts$ = this.wp.getAllPosts();
    // this.posts$.subscribe((res) => console.log(res));
  }

  ngDoCheck() {
    this.posts = this.wp.getPostsFromService();
    this.posts.forEach(post => {
      let postTag = post['_embedded']['wp:term'][1][0].slug;
      let projectImg = post['jetpack_featured_media_url'];
      if(postTag !== 'about') {
        this.displayPosts.push(post);
      }
    })
  }
}