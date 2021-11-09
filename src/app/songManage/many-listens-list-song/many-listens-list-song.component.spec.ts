import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManyListensListSongComponent } from './many-listens-list-song.component';

describe('ManyListensListSongComponent', () => {
  let component: ManyListensListSongComponent;
  let fixture: ComponentFixture<ManyListensListSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManyListensListSongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManyListensListSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
