import {Entity, model, property} from '@loopback/repository';

@model()
export class Directivo extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'number',
  })
  numero_empleados?: number;

  @property({
    type: 'string',
    required: true,
  })
  id_empleado: string;


  constructor(data?: Partial<Directivo>) {
    super(data);
  }
}

export interface DirectivoRelations {
  // describe navigational properties here
}

export type DirectivoWithRelations = Directivo & DirectivoRelations;
