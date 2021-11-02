import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSongsComponent } from './create-songs.component';

describe('CreateSongsComponent', () => {
  let component: CreateSongsComponent;
  let fixture: ComponentFixture<CreateSongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSongsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
