import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoungnutComponent } from './doungnut.component';

describe('DoungnutComponent', () => {
  let component: DoungnutComponent;
  let fixture: ComponentFixture<DoungnutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoungnutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoungnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
