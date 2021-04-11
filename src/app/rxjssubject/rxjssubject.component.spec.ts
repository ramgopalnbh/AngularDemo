import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjssubjectComponent } from './rxjssubject.component';

describe('RxjssubjectComponent', () => {
  let component: RxjssubjectComponent;
  let fixture: ComponentFixture<RxjssubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjssubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjssubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
