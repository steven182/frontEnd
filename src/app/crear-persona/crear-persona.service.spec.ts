import { TestBed, inject } from '@angular/core/testing';

import { CrearPersonaService } from './crear-persona.service';

describe('CrearPersonaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrearPersonaService]
    });
  });

  it('should be created', inject([CrearPersonaService], (service: CrearPersonaService) => {
    expect(service).toBeTruthy();
  }));
});
