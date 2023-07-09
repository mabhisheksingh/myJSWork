// Leetcode medium Question https://leetcode.com/problems/sender-with-largest-word-count/

// Input: messages = ["Hello userTwooo","Hi userThree","Wonderful day Alice","Nice day userThree"],
// senders = ["Alice","userTwo","userThree","Alice"]
// Output: "Alice"

var largestWordCount = function (messages, senders) {
  const map = new Map();
  let max = 0;
  let senderMax="";
  for (let i = 0; i < senders.length; i++) {
    let len = mySplit(messages[i]);
    if (map.has(senders[i])) {
      map.set(senders[i], map.get(senders[i]) + len);
    } else {
      map.set(senders[i], len);
    }
    let tempCount = map.get( senders[i ] );
    if( max < tempCount ){
        max =  tempCount;
        senderMax = senders[i];
    }else if( max == tempCount && senders[i] > senderMax  ){
        senderMax = senders[i];
    }
  }

  return senderMax;
};


const mySplit = function (str) {
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      ++count;
    }
  }
  return count;
};




var findLargest = function (senders, map) {
    let largest = 0;
    let largestSender = "";
    for (let i = 0; i < senders.length; i++) {
      // Count Comparision
      if (map.get(senders[i]) > largest) {
        largest = map.get(senders[i]);
        largestSender = senders[i];
      }
      // Count Same Lexographic Comparision
      else if (map.get(senders[i]) === largest) {
        if (largestSender < senders[i]) {
          largestSender = senders[i];
        }
      }
    }
    return largestSender;
  };
console.log(
  largestWordCount(
    [
      "Hello userTwooo",
      "Hi userThree",
      "Wonderful day Alice",
      "Nice day userThree",
    ],
    ["Alice", "userTwo", "userThree", "Alice"]
  )
);
