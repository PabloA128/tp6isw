import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosLocalesComponent } from './productos-locales.component';

describe('ProductosLocalesComponent', () => {
  let component: ProductosLocalesComponent;
  let fixture: ComponentFixture<ProductosLocalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosLocalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosLocalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
