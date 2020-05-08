import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mwatched',
  templateUrl: './mwatched.page.html',
  styleUrls: ['./mwatched.page.scss'],
})
export class MwatchedPage implements OnInit {
  slidesOptions = {
    slidesPerView: 3
  };

  constructor() { }

  ngOnInit() {
  }

}
