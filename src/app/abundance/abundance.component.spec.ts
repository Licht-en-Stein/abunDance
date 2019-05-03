import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbundanceComponent } from './abundance.component';

describe('AbundanceComponent', () => {
  let component: AbundanceComponent;
  let fixture: ComponentFixture<AbundanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbundanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbundanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
