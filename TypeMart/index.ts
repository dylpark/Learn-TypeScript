// Dylan Park, 2021.
// Learn TypeScript - Codecademy

import products from './products';
let productName: string = 'beanie';
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;

const shippingAddress: string = '500 Coronation Drive, Brisbane, Australia';

const product = products.filter(product => product.name === productName)[0];

console.log(product)

if (product.preOrder) {
  console.log('We will send you a message when your product is on its way.');
}

if (product.price > 25) {
  shipping = 0
  console.log('Shipping: Free')
} else {
  shipping = 5
  console.log('Shipping: $5')
}

if (shippingAddress.match('New York')) {
  taxPercent = 0.1
} else {
  taxPercent = 0.05
}

taxTotal = product.price * taxPercent;
total = product.price + taxTotal + shipping;

console.log(`
Product:  ${product.name}
Address:  ${shippingAddress}
Price:    $${product.price}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:    $${total.toFixed(2)}
`);
