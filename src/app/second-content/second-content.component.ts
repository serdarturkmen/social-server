import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './second-content.component.html',
  styleUrls: ['./second-content.component.css']
})
export class SecondContentComponent implements OnInit {

  constructor(meta: Meta, title: Title) {

    title.setTitle('My Second Content Page');

    meta.updateTag(
      {
        name: 'author', content: 'bogdan bogdanovic'
      }
    );

    meta.updateTag(
      {
        name: 'keywords', content: 'bogdan'
      }
    );

    meta.updateTag(
      {
        name: 'description', content: 'bogdan bogdanovic from sacremento.'
      }
    );

  }

  ngOnInit() {
  }

}
