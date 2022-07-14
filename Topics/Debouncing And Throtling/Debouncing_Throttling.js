//The debounce() function forces a function to wait a certain amount of time before running again
//In JavaScript, the use case is similar. We want to trigger a function, but only once per use case.
//Throttling is a technique where we make the function call in a predetermined time interval irrespective of continuous user actions

let input = document.getElementById("input");

let default1 = document.getElementById("default");
let Debouncing = document.getElementById("Debouncing");
let Throttling = document.getElementById("Throttling");


const updateDebounceText = debounce((text)=>{
    // Debouncing.textContent = text;
    incrementText(Debouncing);//mouseMovement Monitor
})

const updateThrottleText = ThrottleA((text)=>{
    // Throttling.textContent = text;
    incrementText(Throttling);//mouseMovement Monitor
})

input.addEventListener("input",e =>{
    default1.textContent = e.target.value;
    updateDebounceText(e.target.value);
    updateThrottleText(e.target.value);
})

function debounce(cb,delay=1000){
    //return (...args)=> cb(...args)
    let timeOut;
    return (...args)=>{
        clearTimeout(timeOut);
        timeOut= setTimeout(()=>{
            cb(...args)
        },delay)
    }
}

//** Basic throttling 
function ThrottleB(cb,delay=1000){
    let shouldWait = false;
    return (...args)  =>{
        if(shouldWait) return;
        cb(...args);
        shouldWait=true;
        setTimeout( ()=>{
            shouldWait=false;
        },delay)
    }

}

//** Advance Throttling 
function ThrottleA(cb,delay=1000){
    let shouldWait =false;
    let waitingArgs;
    const setTimeOutFunc = ()=>{
        if(waitingArgs == null){
            shouldWait=false
        }else{
            cb(...waitingArgs);
            waitingArgs=null;
            setTimeout(setTimeOutFunc,delay);
        }
    }

    return (...args) =>{
        if(shouldWait) {
            waitingArgs=args;
            return;
        }
        cb(...args);
        shouldWait=true;
        setTimeout(setTimeOutFunc,delay);
    }
}

//mousemOve
document.addEventListener("mousemove", (e) => {
    incrementText(default1);
    updateDebounceText();
    updateThrottleText();
});

function incrementText (element){
    element.textContent = (parseInt(element.innerText) || 0 )+1;
}
