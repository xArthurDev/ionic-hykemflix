import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.page.html',
  styleUrls: ['./series.page.scss'],
})
export class SeriesPage implements OnInit {
  slidesOptions = {
    slidesPerView: 3
  };

  constructor() { }

  ngOnInit() {
  }

}
