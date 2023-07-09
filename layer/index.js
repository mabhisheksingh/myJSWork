
// import { v4 as uuidv4 } from 'uuid';
// uuidv4(); 
const { v4: uuidv4 } = require("uuid");
const got = require("got");
const URL= "https://datausa.io/api/data?drilldowns=Nation&measures=Population";

exports.handler =   async (event, context , callback  ) => {
    console.log("event Name ",event.headers['Name']);
    console.log("event Toekn ",event.headers['Postman-Token']);
    console.log("event User-Agent ",event.headers['User-Agent']);
    console.log("event Key ",event.headers['x-api-key']);
    console.log("event ID ",event.headers['X-Amzn-Trace-Id']);
    console.log("UUID  ",uuidv4()," got ",got);
    
    let response1 = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    let i=0;
    for ( i =0;i < 2333333232323232323232232323232323323;i++) {
        i*=i;
    }
    // setTimeout(function() {
    // console.log("Set time out")
        return  {
            statusCode : 200,
            body: JSON.stringify(`Hello from Lambda 22! ${i} `),
        };
    // }, 3000);
    
    // return response1;
    //callback(null, response1);
    //return response.json(); ;
    // callback(null,  response.json());
    // return response;
};
