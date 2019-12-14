import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfotimerComponent } from './infotimer.component';

describe('InfotimerComponent', () => {
  let component: InfotimerComponent;
  let fixture: ComponentFixture<InfotimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfotimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfotimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
