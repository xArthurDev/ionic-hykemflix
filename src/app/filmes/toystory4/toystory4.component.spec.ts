import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Toystory4Component } from './toystory4.component';

describe('Toystory4Component', () => {
  let component: Toystory4Component;
  let fixture: ComponentFixture<Toystory4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Toystory4Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Toystory4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
