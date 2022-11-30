import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeScreenComponent } from './before-screen.component';

describe('BeforeScreenComponent', () => {
  let component: BeforeScreenComponent;
  let fixture: ComponentFixture<BeforeScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeforeScreenComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BeforeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
