import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoTareasComponent } from './ingreso-tareas.component';

describe('IngresoTareasComponent', () => {
  let component: IngresoTareasComponent;
  let fixture: ComponentFixture<IngresoTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresoTareasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresoTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
