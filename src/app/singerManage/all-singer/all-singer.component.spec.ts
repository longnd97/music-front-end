import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSingerComponent } from './all-singer.component';

describe('AllSingerComponent', () => {
  let component: AllSingerComponent;
  let fixture: ComponentFixture<AllSingerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSingerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSingerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
