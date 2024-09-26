// Lodash
/* 
import _ from 'lodash';
declare var GLOBAL: any;
console.log(_.shuffle([1,2,3]));
console.log(GLOBAL);
*/

// Class transformer
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';

import { Product } from './product.model';

const products = [
  {title: 'A Carpet', price: 10.95},
  {title: 'A Book', price: 50.99}
];

//const p1 = new Product('A Book', 12.99);

//const loadedProducts = products.map(prod => {
//  return new Product(prod.title, prod.price);
//})

const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}