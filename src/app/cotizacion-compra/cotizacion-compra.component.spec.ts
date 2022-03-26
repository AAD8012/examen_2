import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionCompraComponent } from './cotizacion-compra.component';

describe('CotizacionCompraComponent', () => {
  let component: CotizacionCompraComponent;
  let fixture: ComponentFixture<CotizacionCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotizacionCompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizacionCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
