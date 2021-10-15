import {Entity, model, property} from '@loopback/repository';

@model()
export class Articulo extends Entity {
  @property({
    type: 'string',
    id:true,
    generated:true,
  })
  id?:string;
  
  @property({
    type: 'string',
  })
  nombre?: string;

  @property({
    type: 'number',
  })
  cantidad?: number;

  @property({
    type: 'date',
  })
  fecha_creacion?: string;

  @property({
    type: 'string',
  })
  estado?: string;


  constructor(data?: Partial<Articulo>) {
    super(data);
  }
}

export interface ArticuloRelations {
  // describe navigational properties here
}

export type ArticuloWithRelations = Articulo & ArticuloRelations;
