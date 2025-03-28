import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshportalComponent } from './freshportal.component';

describe('FreshportalComponent', () => {
  let component: FreshportalComponent;
  let fixture: ComponentFixture<FreshportalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreshportalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreshportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
