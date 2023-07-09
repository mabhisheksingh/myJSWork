export const data =[
    {
      "trainingCode": "JAVA05",
      "trainingPhase": "Assessment Phase",
      "type": "Instructor",
      "pocPrimary": {
        "id": 6,
        "firstName": "Jack",
        "lastName": "Mill",
        "email": "Jack.mill@publicissapient.com",
      },
      "pocSecondary": {
        "id": 4,
        "firstName": "William",
        "lastName": "Smith",
        "email": "black.smith@publicissapient.com",
      }
    },
    {
      "trainingCode": "JAVA06",
      "trainingPhase": "Assessment Phase1",
      "type": "Instructor1",
      "pocPrimary": {
        "id": 6,
        "firstName": "Jack1",
        "lastName": "Mill",
        "email": "Jack.mill@publicissapient.com"
      },
      "pocSecondary": {
        "id": 4,
        "firstName": "William1",
        "lastName": "Smith",
        "email": "black.smith@publicissapient.com"
      }
    }
]
  

function add(a,b){
  if(a  <0 ) throw new Error("must be greator than 0");

  return a +b;
}

const result  = add(-5,7)