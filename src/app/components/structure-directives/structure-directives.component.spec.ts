import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureDirectivesComponent } from './structure-directives.component';

describe('StructureDirectivesComponent', () => {
  let component: StructureDirectivesComponent;
  let fixture: ComponentFixture<StructureDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructureDirectivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructureDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
