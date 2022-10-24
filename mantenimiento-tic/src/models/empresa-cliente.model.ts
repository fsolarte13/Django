import {Entity, model, property} from '@loopback/repository';

@model()
export class EmpresaCliente extends Entity {
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
  id_cliente: string;


  constructor(data?: Partial<EmpresaCliente>) {
    super(data);
  }
}

export interface EmpresaClienteRelations {
  // describe navigational properties here
}

export type EmpresaClienteWithRelations = EmpresaCliente & EmpresaClienteRelations;
