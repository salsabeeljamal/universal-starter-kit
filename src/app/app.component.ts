import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';

import { PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app';
  private selector: any;
  public metaShow: Meta;
  masonryItems = [
    {title: 'item 1'},
    {title: 'item 2'},
    {title: 'item 3'},
    {title: 'item 4'},
    {title: 'item 5'},
    {title: 'item 6'}
  ];

  public carouselOne: NguCarousel;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object, meta: Meta, title: Title,
  ) {

    title.setTitle('One Page Spotlight');
    meta.addTags([
      { name: 'keywords', content: 'keywords'},
      { name: 'description', content: 'description' },
    ]);
    this.metaShow = meta;
  }

  ngOnInit() {
    this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    };
  }

  ngAfterViewInit() {
  }

  public myfunc(event: Event) {
    // carouselLoad will trigger this funnction when your load value reaches
    // it is helps to load the data by parts to increase the performance of the app
    // must use feature to all carousel
 }

}
