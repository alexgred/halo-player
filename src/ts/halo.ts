import { test } from './controls';
import { Element } from './element';

console.log(test);

let div = new Element('div', {class: 'red', id: 'green'}).getElement;

console.log(div);
