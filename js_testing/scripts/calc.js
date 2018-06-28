function add(a, b) {
    if (arguments.length > 2) {
        return "error. You must only supply 2 numbers"
    }

    if (typeof(a) == "number" && typeof(b) == "number") {
        return a + b;
    }
    else {
        return "error";
    }
}

function sub(a, b) {
    if (arguments.length > 2) {
        return "error. You must only insert 2 numbers"
    }
    else if (arguments.length === 1) {
        return a;
    }

    if (typeof(a) == "number" && typeof(b) == "number") {
        return a - b;
    }
    else {
        alert("error, nan")
    }
}

function mul(a, b) {
    if (arguments.length > 2) {
        return "error, do not enter more than two numbers"; 
    } else if (arguments.length === 1) {
        return a * a; 
    }
    
    if (typeof(a) === "number" && typeof(b) === 'number') {
        return a * b;
    }
    else {
        return "error, please insert only numbers"
    }
}

function div(a, b) {
    if (arguments.length > 2) {
        return "error, please insert only two numbers"; 
    } else if (arguments.length === 1) {
        return a / a; 
    }
    
    if (typeof(a) === "number" && typeof(b) === 'number') {
        return a / b;
    } else {
        return "Please only insert numbers"
    }
}


