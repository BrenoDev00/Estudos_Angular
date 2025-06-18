import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteraryGenderComponent } from './literary-gender.component';

describe('LiteraryGenderComponent', () => {
  let component: LiteraryGenderComponent;
  let fixture: ComponentFixture<LiteraryGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiteraryGenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiteraryGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
