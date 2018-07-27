import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectionsListComponent } from './detections-list.component';

describe('DetectionsListComponent', () => {
  let component: DetectionsListComponent;
  let fixture: ComponentFixture<DetectionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetectionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
