import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecompensasPage } from './recompensas.page';

describe('RecompensasPage', () => {
  let component: RecompensasPage;
  let fixture: ComponentFixture<RecompensasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecompensasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
