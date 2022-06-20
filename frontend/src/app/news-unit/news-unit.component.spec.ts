import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsUnitComponent } from './news-unit.component';

describe('NewsUnitComponent', () => {
  let component: NewsUnitComponent;
  let fixture: ComponentFixture<NewsUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsUnitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
