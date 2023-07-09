// var count =9;

// const temp = (function (){
//     console.log(count);
//     var count =0;
//     return {
//         increment: function (){ count+=1;},
//         decrement: function (){ count-=1;},
//         getCountValue: function (){ return count}
//     }
// })();

// temp.increment();
// console.log(temp.getCountValue());
// temp.decrement();
// console.log(temp.getCountValue());

function abc(){
    const funcs =[];
    for (let index = 0; index < 10; index++) {
        funcs[index] = function (){
            return index;
        }
    }
    return funcs;
}

const c =  abc();
c[5]();
