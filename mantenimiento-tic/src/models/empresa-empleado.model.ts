import {Entity, model, property} from '@loopback/repository';

@model()
export class EmpresaEmpleado extends Entity {
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
  id_empresa: string;

  @property({
    type: 'string',
    required: true,
  })
  id_empleado: string;


  constructor(data?: Partial<EmpresaEmpleado>) {
    super(data);
  }
}

export interface EmpresaEmpleadoRelations {
  // describe navigational properties here
}

export type EmpresaEmpleadoWithRelations = EmpresaEmpleado & EmpresaEmpleadoRelations;
