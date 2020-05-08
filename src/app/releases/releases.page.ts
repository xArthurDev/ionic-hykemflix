import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-releases',
  templateUrl: './releases.page.html',
  styleUrls: ['./releases.page.scss'],
})
export class ReleasesPage implements OnInit {
  slidesOptions = {
    slidesPerView: 3
  };

  constructor() { }

  ngOnInit() {
  }

}
