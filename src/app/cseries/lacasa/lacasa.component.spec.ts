import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LacasaComponent } from './lacasa.component';

describe('LacasaComponent', () => {
  let component: LacasaComponent;
  let fixture: ComponentFixture<LacasaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LacasaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LacasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
