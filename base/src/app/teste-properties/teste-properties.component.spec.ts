import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestePropertiesComponent } from './teste-properties.component';

describe('TestePropertiesComponent', () => {
  let component: TestePropertiesComponent;
  let fixture: ComponentFixture<TestePropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestePropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
