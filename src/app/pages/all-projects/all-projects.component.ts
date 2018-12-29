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

  constructor(private wp: WordpressService) {
    // this.posts$ = this.wp.getAllPosts();
    // this.posts$.subscribe((res) => console.log(res));
  }

  ngDoCheck() {
    this.posts = this.wp.getPostsFromService();
  }
}