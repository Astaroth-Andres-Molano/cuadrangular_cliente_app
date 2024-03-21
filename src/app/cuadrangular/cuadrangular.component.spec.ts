import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CuadrangularComponent } from './cuadrangular.component';

describe('CuadrangularComponent', () => {
  let component: CuadrangularComponent;
  let fixture: ComponentFixture<CuadrangularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadrangularComponent ],
      imports: [ HttpClientTestingModule ] // Importamos HttpClientTestingModule para simular solicitudes HTTP
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadrangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // Aquí puedes agregar más pruebas según sea necesario
});
