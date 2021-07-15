import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseClassComponent } from './use-class.component';

describe('UseClassComponent', () => {
  let component: UseClassComponent;
  let fixture: ComponentFixture<UseClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
