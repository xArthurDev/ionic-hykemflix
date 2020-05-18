import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BarracabeijoComponent } from './barracabeijo.component';

describe('BarracabeijoComponent', () => {
  let component: BarracabeijoComponent;
  let fixture: ComponentFixture<BarracabeijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarracabeijoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BarracabeijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
