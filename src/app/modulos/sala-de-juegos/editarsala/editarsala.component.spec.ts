import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarsalaComponent } from './editarsala.component';

describe('EditarsalaComponent', () => {
  let component: EditarsalaComponent;
  let fixture: ComponentFixture<EditarsalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarsalaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarsalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
