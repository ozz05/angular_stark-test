import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionDisplay } from './collection-display';

describe('CollectionDisplay', () => {
  let component: CollectionDisplay;
  let fixture: ComponentFixture<CollectionDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionDisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionDisplay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
