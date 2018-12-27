import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryProjectComponent } from './category-project.component';

describe('CategoryProjectComponent', () => {
  let component: CategoryProjectComponent;
  let fixture: ComponentFixture<CategoryProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
