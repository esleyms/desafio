import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitsmartComponent } from './citsmart.component';

describe('CitsmartComponent', () => {
  let component: CitsmartComponent;
  let fixture: ComponentFixture<CitsmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitsmartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitsmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
