import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearCityComponent } from './near-city.component';

describe('NearCityComponent', () => {
  let component: NearCityComponent;
  let fixture: ComponentFixture<NearCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
