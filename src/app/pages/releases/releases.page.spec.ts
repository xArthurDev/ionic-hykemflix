import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReleasesPage } from './releases.page';

describe('ReleasesPage', () => {
  let component: ReleasesPage;
  let fixture: ComponentFixture<ReleasesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleasesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReleasesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
