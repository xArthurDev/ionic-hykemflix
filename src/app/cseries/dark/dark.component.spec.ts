import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DarkComponent } from './dark.component';

describe('DarkComponent', () => {
  let component: DarkComponent;
  let fixture: ComponentFixture<DarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
