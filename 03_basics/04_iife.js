//immediately invoked function expression (IIFE)
//it runs as soon as it is defined
//first id the function with lexical scoping enclosed within the braces
//the second part creates the immediately invoked function expression(), through which the the js engine will directly interpret the function
//it is mandatory to include semicolon (;) at the end of the after the brace


(function chai(){
  //this is a named iffe
  console.log(`DB Connected`);
})();


( (name) => {//parameter passed in function
  //unnamed iffe
  console.log(`db connected ${name}`);//variables accepted
})("akash");//arguments to the function given
