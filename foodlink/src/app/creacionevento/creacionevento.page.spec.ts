import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreacioneventoPage } from './creacionevento.page';

describe('CreacioneventoPage', () => {
  let component: CreacioneventoPage;
  let fixture: ComponentFixture<CreacioneventoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacioneventoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
