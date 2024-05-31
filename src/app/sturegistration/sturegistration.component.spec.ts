import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SturegistrationComponent } from './sturegistration.component';

describe('SturegistrationComponent', () => {
  let component: SturegistrationComponent;
  let fixture: ComponentFixture<SturegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SturegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SturegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
