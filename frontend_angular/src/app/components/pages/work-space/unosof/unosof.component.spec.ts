import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnosofComponent } from './unosof.component';

describe('UnosofComponent', () => {
  let component: UnosofComponent;
  let fixture: ComponentFixture<UnosofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnosofComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnosofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
