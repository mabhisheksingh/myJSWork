// import  ssm from 'aws-sdk/clients/ssm.js';


import csc from 'country-state-city';

console.log("data ",csc.State.getStatesOfCountry("IN"));

// async function getSSM(){
//     var params = {
//         Names: [ '/comm/dev/'],
//         WithDecryption: true 
//     };

//     const parameter= await new ssm({region:'us-east-1'}).getParameters(params).promise();
//     console.log("TestPayer1 ",parameter);
//     const config = parameter.Parameters[0].Value.split(",");
//     console.log("configs  ",config);
// }
// getSSM();
/* A generator function. */
function* generator() {
    yield 1;

    yield 2;
}

const a = generator();
console.log(a);
console.log(a.next());

