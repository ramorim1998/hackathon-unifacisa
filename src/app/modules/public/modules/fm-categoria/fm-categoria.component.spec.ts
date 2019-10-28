import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmCategoriaComponent } from './fm-categoria.component';

describe('FmCategoriaComponent', () => {
  let component: FmCategoriaComponent;
  let fixture: ComponentFixture<FmCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
