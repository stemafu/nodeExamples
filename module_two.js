let configInfo; // This is a global varibale.
/* A global variable is accessible inside any function that 
we have difined in this module.

*/

let other = {greeting:"Hello",
                  firstname: "Mary",
                  lastname:"Doe"
};

function helloWorld(){
    return "Hello World!";
};

function helloPerson(name){
    return `Hello ${name}!. ${configInfo}`;
}

let hello = (name) => {
    return "This is just a test" + name;
}


/*module.exports = */

module.exports = function(msg){
    //console.log(msg);
    configInfo = msg;



    return {
        helloWorld: helloWorld,
        helloPerson: helloPerson,
        other: other,
        hello: hello
    };
}