// Adds pressed key to calculator screen
const appendToResult = (value) => {
    document.getElementById("result").value += value;
}

// Clears calculator screen
const clearResult = () => {
    document.getElementById("result").value = "";
}

// Function to calculate inserted string
const calculate = () => {
    // Get the input string from the calculator screen
    let inputString = document.getElementById("result").value;

    // Split the string into an array of tokens
    let tokens = inputString.split(/([-+*/%])/);

    // Remove any empty tokens
    tokens = tokens.filter(token => token.trim() !== "");

    // Initialize variables for the calculation
    let result;
    let operator;

    // Check if the first token is a negative sign
    if (tokens[0] === "-") {
        // If so, concatenate it with the next token to form a negative number
        result = -parseFloat(tokens[1]);
        tokens = tokens.slice(2);
    } else {
        // Otherwise, set the first token as the initial result value
        result = parseFloat(tokens[0]);
        tokens = tokens.slice(1);
    }

    // Loop through the remaining tokens and perform the calculations depending on the operator
    for (var i = 0; i < tokens.length; i += 2) {
        operator = tokens[i];
        switch (operator) {
            case "+":
                result += parseFloat(tokens[i + 1]);
                break;
            case "-":
                result -= parseFloat(tokens[i + 1]);
                break;
            case "*":
                result *= parseFloat(tokens[i + 1]);
                break;
            case "/":
                result /= parseFloat(tokens[i + 1]);
                break;
            case "%":
                result *= parseFloat(tokens[i + 1]) / 100;
                break;
        }
    }

    // Set the result
    document.getElementById("result").value = result;
}
