import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BusquedaeventosPage } from './busquedaeventos.page';

describe('BusquedaeventosPage', () => {
  let component: BusquedaeventosPage;
  let fixture: ComponentFixture<BusquedaeventosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaeventosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
