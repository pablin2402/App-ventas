import {Galleta} from "./galleta";

export class Order 
{

  id: string;
  uid: String;
  products: Galleta[] = [];
  totalProducts: number = 0;
  cantidad: number;
  created_at: Date;

  constructor() 
  {

  }
  
}
