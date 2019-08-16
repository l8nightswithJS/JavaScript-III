/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. the first principle window binding allows you to bind values to the main window that u are operating from unless in strict mode. 
* 2. Implicit Binding is when all the values are bound to whats left of the function when it is called.

* 3. when the new keyword  is used along with a constructer function it is saying that this now refers to a new object just created.
* 4. explicit binding is when u use the .call atrribute to point .this to a specific function.
*
* write out a code example of each explanation above
*/

// Principle 1
//window binding
// code example for Window Binding

var name = "eddie";
function Name() {
    return(this);
}
console.log(Name());
'usestrict'

// Principle 2
//Implicint binding
// code example for Implicit Binding
let full_name = {
    first_name: "eddie",
    last_name: "jimenez",
    my_name: function () {
        return (this.first_name + " " + this.last_name);
    }    
}
console.log(full_name.my_name());
// Principle 3
//New binding
// code example for New Binding
function Car(type) {
    this.make = type.make;
    this.model = type.model;    
}
const bmw = new Car({
    make: "BMW",
    model: "535i"
})
console.log(bmw);



// Principle 4
//Explicit binding
// code example for Explicit Binding
function car(){
    return this.car;
}
const myCar = {
    car: "bmw"
}
car.call(myCar);
console.log(myCar);