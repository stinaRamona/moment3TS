import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertTempComponent } from './convert-temp.component';

describe('ConvertTempComponent', () => {
  let component: ConvertTempComponent;
  let fixture: ComponentFixture<ConvertTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConvertTempComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConvertTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
