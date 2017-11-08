import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './first-content.component.html',
  styleUrls: ['./first-content.component.css']
})
export class FirstContentComponent implements OnInit {

  constructor(meta: Meta, title: Title) {

    title.setTitle('My First Social Content');

    meta.updateTag({
        name: 'author', content: 'lionel messi'
      }
    );

    meta.updateTag(
      {
        name: 'keywords', content: 'angular 4 for social content'
      }
    );
    meta.updateTag(
      {
        name: 'description', content: 'Description for first content.'
      }
    );

  }

  ngOnInit() {
  }

}
