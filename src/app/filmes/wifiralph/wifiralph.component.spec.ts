import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WifiralphComponent } from './wifiralph.component';

describe('WifiralphComponent', () => {
  let component: WifiralphComponent;
  let fixture: ComponentFixture<WifiralphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WifiralphComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WifiralphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
