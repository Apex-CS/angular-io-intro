import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchContainerLayoutComponent } from './search-container-layout.component';

describe('SearchContainerLayoutComponent', () => {
  let component: SearchContainerLayoutComponent;
  let fixture: ComponentFixture<SearchContainerLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchContainerLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchContainerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
