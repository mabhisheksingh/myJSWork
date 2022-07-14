console.log("just checking js file is running");

let input = document.getElementById("input");

let defaultText = document.getElementById("default");
let debouncingText = document.getElementById("Debouncing");
let throttlingText = document.getElementById("Throttling");



input.addEventListener("input", (event) => {
  defaultText.textContent = event.target.value;
  // debouncingTextFunc(null, event.target.value);
});

const a= alpha("Singh","A");
console.log("A ",a("Testng"))

function alpha(a,b){
  console.log("Abhishek ",a);
  return (args) =>{
    console.log("Testing ",args)
  }
}
