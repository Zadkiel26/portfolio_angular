import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiUnitTestComponent } from './api-unit-test.component';

describe('ApiUnitTestComponent', () => {
  let component: ApiUnitTestComponent;
  let fixture: ComponentFixture<ApiUnitTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiUnitTestComponent]
    });
    fixture = TestBed.createComponent(ApiUnitTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
