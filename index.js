import  ssm from 'aws-sdk/clients/ssm.js';




async function getSSM(){
    var params = {
        Names: [ '/comm/dev/'],
        WithDecryption: true 
    };

    const parameter= await new ssm({region:'us-east-1'}).getParameters(params).promise();
    console.log("TestPayer1 ",parameter);
    const config = parameter.Parameters[0].Value.split(",");
    console.log("configs  ",config);
}
// getSSM();