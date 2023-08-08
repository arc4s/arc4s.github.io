import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageTreeComponent } from './language-tree.component';

describe('LanguageTreeComponent', () => {
  let component: LanguageTreeComponent;
  let fixture: ComponentFixture<LanguageTreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LanguageTreeComponent]
    });
    fixture = TestBed.createComponent(LanguageTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
