import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseDiagramsComponent } from './database-diagrams.component';

describe('DatabaseDiagramsComponent', () => {
  let component: DatabaseDiagramsComponent;
  let fixture: ComponentFixture<DatabaseDiagramsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatabaseDiagramsComponent]
    });
    fixture = TestBed.createComponent(DatabaseDiagramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
