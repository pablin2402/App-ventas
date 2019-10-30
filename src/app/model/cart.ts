export class Cart
{
  id?: string;
  uid: string; //para el usuario
  products?: Array<any> =[];
  totalProducts: number = 0;

  constructor()
  {

  }
}
