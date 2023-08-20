// This is a single line comment

/* This is a multi line comment, you have to close this so that it terminates the multi line comment */

//let is how you clear a variable 

let myhttp = require("http");

// use dot notation  in java to access an object and its methods and properties

let myserver = myhttp.createServer(
  function( myrequest, myresponse ) {
    console.log( myrequest.url );

   
    myresponse.writehead( 200, { "Content-Type": "text/plain"} );


    myresponse.end( "Hello World!" );
  }
);
myserver.listen(8080, "0.0.0.0");
console.log ("server has started");