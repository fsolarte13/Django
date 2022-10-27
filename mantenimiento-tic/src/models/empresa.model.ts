import {Entity, model, property, hasMany} from '@loopback/repository';
import {Proveedor} from './proveedor.model';

@model()
export class Empresa extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  nit: string;

  @property({
    type: 'string',
    required: true,
  })
  direccion: string;

  @property({
    type: 'string',
    required: true,
  })
  mail: string;

  @property({
    type: 'string',
  })
  telefono?: string;

  @hasMany(() => Proveedor, {keyTo: 'id_empresa'})
  proveedors: Proveedor[];

  constructor(data?: Partial<Empresa>) {
    super(data);
  }
}

export interface EmpresaRelations {
  // describe navigational properties here
}

export type EmpresaWithRelations = Empresa & EmpresaRelations;
