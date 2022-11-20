import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearsalaComponent } from './crearsala.component';

describe('CrearsalaComponent', () => {
  let component: CrearsalaComponent;
  let fixture: ComponentFixture<CrearsalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearsalaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearsalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
