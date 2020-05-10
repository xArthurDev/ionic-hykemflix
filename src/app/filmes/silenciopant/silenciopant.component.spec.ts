import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SilenciopantComponent } from './silenciopant.component';

describe('SilenciopantComponent', () => {
  let component: SilenciopantComponent;
  let fixture: ComponentFixture<SilenciopantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SilenciopantComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SilenciopantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
