import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.page.html',
  styleUrls: ['./animes.page.scss'],
})
export class AnimesPage implements OnInit {
  slidesOptions = {
    slidesPerView: 3
  };

  constructor() { }

  ngOnInit() {
  }

}
