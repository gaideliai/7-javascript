/*
    1. Write two binary functions, add and mul, that take two numbers and return their sum and product. 
  
    add(3, 4);    //  7  
    mul(3, 4);    // 12
*/

function add(a, b) {
    return a + b;
}

function mul(a, b) {
    return a * b;
}

// console.log(add(3, 4));
// console.log(mul(3, 4));


/*
    2. Write a function that takes an argument and returns a function that returns that argument.  

    const idf = identify(3);
    idf();    // 3
*/

function identify(a) {
    return () => {
        return a;
    }
}

// const idf = identify(3);
// console.log(idf());

/*
    3. Write a function addf that adds from two invocations.
    
    addf(3)(4);    // 7
*/

function addf(a) {
    return (b) => {
        return a + b;
    }
}

// console.log(addf(3)(4));

/*
    4. Write a function that takes a binary function, and makes it callable with two invocations.
    
    const addf = applyf(add);
    addf(3)(4);           // 7
    applyf(mul)(5)(6);    // 30
*/

function applyf(f) {
    return (a) => {
        return (b) => {
            return f(a, b);
        }
    }
}

// const addfu = applyf(add);
// console.log(addfu(3)(4));
// console.log(applyf(mul)(5)(6));

/*
    5. Write a function that takes a function and an argument, and returns a function that can supply a second argument.  

    const add3 = curry(add, 3);  
    add3(4);             // 7  
    curry(mul, 5)(6);    // 30  
*/

function curry(f, a) {
    return (b) => {
        return f(a, b);
    }
}

// const add3 = curry(add, 3);  
// console.log(add3(4));    
// console.log(curry(mul, 5)(6));

/*
    6. Write a function twice that takes a binary function and returns a unary function that passes its argument to the binary function twice.
    
    const double = twice(add);  
    double(11);    // 22  
    const square = twice(mul);  
    square(11);    // 121
*/

function twice(f) {
    return (a) => {
        return f(a, a);
    }
}

const double = twice(add);  
// console.log(double(11));
const square = twice(mul);  
// console.log(square(11));

/*
    7. Write a function composeu that takes two unary functions and returns a unary function that calls them both. 

    composeu(double, square)(3);    // 36
*/

function composeu(f, fu) {
    return (a) => {
        return fu(f(a));
    }
}

// console.log(composeu(double, square)(3));

/*
    8. Write a function that adds from many invocations, until it sees an empty invocation.

    addg(3)(4)(5)();     // 12 
    addg(1)(2)(4)(8)();  // 15
*/

function addg(a) {
    function next(b) {
        if (b === undefined ) {
            return a;
        }
        a += b;
        return next;
    }    
    return next;    
}

// console.log(addg(1)(2)(4)(8)());

/*
    9. Write a function that will take a binary function and apply it to many invocations.

    applyg(add)(3)(4)(5)();       // 12 
    applyg(mul)(1)(2)(4)(8)();    // 64
*/

function applyg(func) {
    return (a) => {
        return function next(b) {
            if (b === undefined ) {
                return a;
            }
            a = func(a, b);
            return next;
        }
    }
}

// console.log(applyg(mul)(1)(2)(4)(8)());

/*
    10. Make a function that returns a function that will return the next fibonacci number.

    const fib = fibonaccif();  
    fib();    // 0  
    fib();    // 1  
    fib();    // 1  
    fib();    // 2  
    fib();    // 3  
    fib();    // 5
*/

function fibonaccif(a, b) {
    return () => {
        let next = a;
        a = b;
        b += next;
    
        return next;
    }
}

const fib = fibonaccif(0, 1);  
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());