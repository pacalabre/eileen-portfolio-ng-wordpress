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

  constructor(private route: ActivatedRoute, private wp: WordpressService) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(paramsAsMap => {
        this.slugName = this.route.snapshot.paramMap.get("category");
      })
      this.filterPostsByCategory();
  }

  filterPostsByCategory() {
    this.post$ = this.wp.getAllPosts();
    this.post$.subscribe((res) => {
      console.log(res);
      res.forEach(post => {
        let categoryName = post['_embedded']['wp:term'][0][0].slug;
        if(categoryName === this.slugName) {
          this.categoryPosts.push(post);
        };
      })
      console.log(this.categoryPosts);
    })
  }
}