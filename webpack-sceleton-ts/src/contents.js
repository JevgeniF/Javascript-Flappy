//import {fido} from "./secondary.js";

export function Foobar() {
    return 'Foobar';
}

function Xyz() {
    return 'Xyz';
}

export {Xyz};
export {Foobar as Zyx};

export default function Def() {
    return 'Def';
}

export * from './secondary.js';
export {fido as dog} from './secondary.js'

console.log('inside contents');