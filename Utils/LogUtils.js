import chalk  from 'chalk';
const errorChalk = chalk.bold.red;
const warningChalk = chalk.hex('#FFA500'); // Orange color
const logChalk = chalk.bold.black; // white color
const infoChalk = chalk.bold.green; // white color

/**
 * It takes any number of arguments, and prints them to the console using the `console.info()` method,
 * and the `infoChalk` function
 * @param args - The arguments to be printed
 */
export function printInfo(...args){
    console.info(infoChalk(...args));
}
export function printLog(...args){
    console.log(logChalk(...args));
}
export function printWarning(...args){
    console.warn(warningChalk(...args));
}
export function printError(...args){
    console.error(errorChalk(...args));
}
