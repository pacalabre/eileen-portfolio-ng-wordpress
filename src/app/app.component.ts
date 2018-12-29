import { Component,  OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
import { WordpressService } from './wordpress.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements  OnInit {
  // posts$: Observable<any[]>;

  constructor(private wp: WordpressService) {
    // this.wp.getAllPosts();
      // this.posts$.subscribe((res) => console.log(res));
  }

  ngOnInit(){
    this.wp.getAllPosts();
  }
}