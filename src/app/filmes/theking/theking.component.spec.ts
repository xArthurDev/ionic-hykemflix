import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThekingComponent } from './theking.component';

describe('ThekingComponent', () => {
  let component: ThekingComponent;
  let fixture: ComponentFixture<ThekingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThekingComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThekingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
