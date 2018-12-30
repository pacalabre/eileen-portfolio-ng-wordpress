import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordpressService } from '../../wordpress.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss']
})

export class SingleProjectComponent implements OnInit {

  slugName = "";
  // post$: Observable<any[]>;
  projectTitle;
  projectText;
  projectImg;
  allPosts = [];
 
  constructor(private route: ActivatedRoute, private wp: WordpressService) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(paramsAsMap => {
        this.slugName = this.route.snapshot.paramMap.get("id");
      })
  }

  ngDoCheck() {
    this.showPost();
  }

  showPost() {
    this.allPosts = this.wp.getPostsFromService();
    this.allPosts.forEach(post => {
      if(post.slug === this.slugName) {       
        this.projectTitle = post.title.rendered;
        this.projectText = post.content.rendered;
        this.projectImg = post._embedded["wp:featuredmedia"][0].source_url;
      }
    })
  }
 
}