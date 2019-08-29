import { Component, OnInit, Directive, TemplateRef ,AfterViewInit} from '@angular/core';
import * as $ from 'jquery';

declare var jQuery: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images = [];
  activeOne: string;
  constructor() { }

  ngAfterViewInit(){
    this.showmanymoveone();
    this.showmanymoveoneAdd();
    this.theCarousel();
  }
  ngOnInit() {
    this.images = ['http://placehold.it/300/f44336/000000', 'http://placehold.it/300/e91e63/000000', 'http://placehold.it/300/9c27b0/000000',
                   'http://placehold.it/300/673ab7/000000', 'http://placehold.it/300/4caf50/000000', 'http://placehold.it/300/8bc34a/000000'];
  
    this.activeOne = 'item active';
  }
	theCarousel(){
    $('#theCarousel').carousel();
    };

    showmanymoveoneAdd(){
      $('.carousel-showmanymoveone .item').each(function(obj,event){
        console.log(obj,event);
        var itemToClone = $(this);

        for (var i=1;i<3;i++) {
          itemToClone = itemToClone.next();

          // wrap around if at end of item collection
          if (!itemToClone.length) {
            itemToClone = $(this).siblings(':first');
          }

          // grab item, clone, add marker class, add to collection
          itemToClone.children(':first-child').clone()
            .addClass("cloneditem-"+(i))
            .appendTo($(this));
        }
      });
  };
  
  showmanymoveone() {
    $('.carousel-showmanymoveone').carousel({
      interval: false
  }); 
  };
}
