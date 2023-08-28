// This is a single line comment

/* This is a multi line comment, you have to close this so that it terminates the multi line comment */


let myhttp = require('http');

// use dot notation  in java to access an object and its methods and properties

let myserver = myhttp.createServer(
  function( myrequest, myresponse ) {
    console.log( myrequest.url );



let mytext;
    if ( myrequest.url === "/hey" ) {
      mytext = "Well hello there friend...";
    } else {
      mytext = "I Dont know you!";
    }
    myresponse.writeHead( 200,{ "Content-Type": "text/plain" } );

    myresponse.end( mytext );
  }
);
myserver.listen(8080, "0.0.0.0");
console.log ("server has started");