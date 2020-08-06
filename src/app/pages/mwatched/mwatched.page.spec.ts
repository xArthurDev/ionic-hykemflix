import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MwatchedPage } from './mwatched.page';

describe('MwatchedPage', () => {
  let component: MwatchedPage;
  let fixture: ComponentFixture<MwatchedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwatchedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MwatchedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
