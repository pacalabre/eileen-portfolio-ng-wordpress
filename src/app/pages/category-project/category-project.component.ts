import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordpressService } from '../../wordpress.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-project',
  templateUrl: './category-project.component.html',
  styleUrls: ['./category-project.component.scss']
})

export class CategoryProjectComponent implements OnInit {

  slugName = "";
  post$: Observable<any[]>;
  categoryPosts = [];
  posts=[];

  constructor(private route: ActivatedRoute, private wp: WordpressService) { }

  ngOnInit() {
   // this.posts = this.wp.getPostsFromArr();
    this.route.paramMap
      .subscribe(paramsAsMap => {
        this.slugName = this.route.snapshot.paramMap.get("category");
      })
      this.filterPostsByCategory();
  }

  ngDoCheck() {
    this.posts = this.wp.getPostsFromService();
    this.filterPostsByCategory();
  }

  filterPostsByCategory() {
      this.posts.forEach(post => {
        let categoryName = post['_embedded']['wp:term'][1][0].slug;
        if(categoryName === this.slugName) {
          this.categoryPosts.push(post);
        };
      })
      console.log(this.categoryPosts);
  }
}

