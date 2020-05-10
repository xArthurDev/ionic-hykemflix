import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Milagre7Component } from './milagre7.component';

describe('Milagre7Component', () => {
  let component: Milagre7Component;
  let fixture: ComponentFixture<Milagre7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Milagre7Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Milagre7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
