import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityNotFoundComponent } from './city-not-found.component';

describe('CityNotFoundComponent', () => {
  let component: CityNotFoundComponent;
  let fixture: ComponentFixture<CityNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
