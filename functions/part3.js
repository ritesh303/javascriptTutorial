//immediately invoked function expressing(iife)
//(function that needs to be executed)(); --- semicolon is very important if we want to call more than one iife

//to avoid polluting the global namespace we use iife
//actually we want that our function executes immediately
//suppose we want to connect our database

(function dburi(){
    console.log('db connected successfully')
})();

//arrow function
(dburi= ()=>{
    console.log('mongodb connected successfully')
})();

//if we want to parse daat

(dburi= (port)=>{
    console.log( `mongodb connected successfully to port ${port}`)
})(8080);