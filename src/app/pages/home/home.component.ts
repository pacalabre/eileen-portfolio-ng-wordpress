import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WordpressService } from '../../wordpress.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  posts$: Observable<any[]>;
  categories=[];

  constructor(private wp: WordpressService) {
    this.posts$ = this.wp.getAllPosts();
      this.posts$.subscribe((res) =>  {
        console.log(res);
        res.forEach(post => {
          let categoryName = post['_embedded']['wp:term'][0][0].slug;
          if (!this.categories.includes(categoryName)) {
            this.categories.push(categoryName);
          }
        })
        console.log(this.categories);
      })
  }

  ngOnInit() {
  }
}