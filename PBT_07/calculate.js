function calculate (a,op,b) {
    switch(op){
        case "+" : return a + b;
        case "-" : return a - b;
        case "*" : return a * b;
        case "/" : return a / b;

    }
}

console.log(calculate(5, "+" ,3));
console.log(calculate(10, "-" ,2));
