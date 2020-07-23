import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VingadoresultComponent } from './vingadoresult.component';

describe('VingadoresultComponent', () => {
  let component: VingadoresultComponent;
  let fixture: ComponentFixture<VingadoresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VingadoresultComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VingadoresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
