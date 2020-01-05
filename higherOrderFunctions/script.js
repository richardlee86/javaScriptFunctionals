//higher order functions take functions as arguments or return other functions

//set interval takes function and calls it at interval provided by user

function sing() {
  console.log("twinkle twinkle....");
  console.log("how I wonder....");
}
setInterval(sing, 1000);

//anonymous functions can be created and called from inside setInterval. These functions
//cannot be called outside of setInterval

setInterval(function() {
  console.log("I am an anonymous function!");
  console.log("This is awesome!");
}, 2000);
