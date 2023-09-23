import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadComponent } from './bad.component';

describe('BadComponent', () => {
  let component: BadComponent;
  let fixture: ComponentFixture<BadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BadComponent]
    });
    fixture = TestBed.createComponent(BadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
