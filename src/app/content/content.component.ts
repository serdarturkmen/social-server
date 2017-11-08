import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  param: String;
  private sub: any;

  constructor(private meta: Meta, public title: Title, private route: ActivatedRoute) {  }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.param = params['param'];
    });

    if(this.param == "first"){

      this.title.setTitle('My first Social Content');

      this.meta.updateTag(
        {
          name: 'description', content: 'Description for first content.'
        }
      );

    }else if(this.param == "second"){
      this.title.setTitle('My Second Content Page');

      this.meta.updateTag(
        {
          name: 'description', content: 'bogdan bogdanovic from sacremento.'
        }
      );
    }else{
      this.title.setTitle('My other Social Content');
      console.log("other");
    }





  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
