import {readdirSync} from 'node:fs';
import path = require('node:path');

function main() {
  const startingPoint = './node_modules';
  const read = readdirSync(startingPoint);
  for (const dir of read) {
    console.log(path.resolve(startingPoint, dir));
  }
}
main();
