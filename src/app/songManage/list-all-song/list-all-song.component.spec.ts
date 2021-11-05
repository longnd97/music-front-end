import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllSongComponent } from './list-all-song.component';

describe('ListAllSongComponent', () => {
  let component: ListAllSongComponent;
  let fixture: ComponentFixture<ListAllSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllSongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
