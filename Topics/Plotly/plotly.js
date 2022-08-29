
import {URL} from  'url';

const cwd = process.cwd();
const __path =  new URL('', import.meta.url).pathname;
const __dir =  new URL('.', import.meta.url).pathname;
console.log("cwd ",cwd);
console.log("__path ",__path);
console.log("__dir ",__dir);
