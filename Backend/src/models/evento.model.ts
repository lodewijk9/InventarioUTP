import {Entity, model, property} from '@loopback/repository';

@model()
export class Evento extends Entity {
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
  tipo: string;

  @property({
    type: 'date',
  })
  fecha_inicio?: string;

  @property({
    type: 'date',
  })
  fecha_fin?: string;

  @property({
    type: 'string',
    required: true,
  })
  articulo_id: string;

  @property({
    type: 'string',
    required: true,
  })
  quien_alquila: string;

  @property({
    type: 'string',
  })
  quien_entrega?: string;
  @property({
    type: 'number',
  })
  cantidad?: number;

  constructor(data?: Partial<Evento>) {
    super(data);
  }
}

export interface EventoRelations {
  // describe navigational properties here
}

export type EventoWithRelations = Evento & EventoRelations;
