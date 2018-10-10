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

  constructor(private route: ActivatedRoute, private wp: WordpressService) { }
  slugName = "";
  post$: Observable<any[]>;
  projectTitle;
  projectText;
  projectImg;

  ngOnInit() {
  	this.route.paramMap
  		.subscribe(params => {
  			this.slugName = params.params.id;
  		})
  		this.post$ = this.wp.getPost(this.slugName);
  		this.post$.subscribe((res) => {
  			console.log(res[0]);
  			this.projectTitle = res[0].title.rendered;
  			this.projectText = res[0].content.rendered;
  			this.projectImg = res[0]._embedded["wp:featuredmedia"][0].source_url;
  		})
  }

}
