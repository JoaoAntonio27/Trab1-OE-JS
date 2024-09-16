function evaluateExpression(expression) {
    const operators = [];
    const values = [];
  
    function applyOperator() {
        const op = operators.pop();
        const b = values.pop();
        const a = values.pop();
        switch (op) {
            case '+': values.push(a + b); break;
            case '-': values.push(a - b); break;
            case '*': values.push(a * b); break;
            case '/': values.push(a / b); break;
        }
    }

    function precedence(op) {
        return (op === '+' || op === '-') ? 1 : (op === '*' || op === '/') ? 2 : 0;
    }

    let i = 0;
    while (i < expression.length) {
        const char = expression[i];
        
        if (/\d/.test(char)) {
            let num = '';
            while (i < expression.length && /\d/.test(expression[i])) {
                num += expression[i++];
            }
            values.push(Number(num));
            continue;
        }

        if (char === '(') {
            operators.push(char);
        } else if (char === ')') {
            while (operators[operators.length - 1] !== '(') {
                applyOperator();
            }
            operators.pop();
        } else if (/[+\-*/]/.test(char)) {
            while (operators.length && precedence(operators[operators.length - 1]) >= precedence(char)) {
                applyOperator();
            }
            operators.push(char);
        }
        i++;
    }

    while (operators.length) {
        applyOperator();
    }

    return values[0];
}

//console.log(evaluateExpression("CALCULO"));
