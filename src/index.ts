import { readdirSync } from "node:fs"
import path = require("node:path");

function main() {
	let startingPoint = "./node_modules";
	let read= readdirSync(startingPoint);
	for (let dir of read) {
		console.log(path.resolve(startingPoint,dir));
	}
}
main()
