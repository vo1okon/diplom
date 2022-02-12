import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemmosComponent } from './memmos.component';

describe('MemmosComponent', () => {
  let component: MemmosComponent;
  let fixture: ComponentFixture<MemmosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemmosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemmosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
