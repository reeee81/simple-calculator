function calculate() {
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    op = document.getElementById("operator").value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        alert("please enter valid numbers!");
    } else {
        switch(op) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                if (num2 === 0) {
                    alert("divisor cannot be 0!");
                    break;
                } else {
                    result = num1 / num2;
                    break;
                }
            default:
                result = "invalid operation";
        }
    }

    document.getElementById("result").innerText = "result:" + result;
}