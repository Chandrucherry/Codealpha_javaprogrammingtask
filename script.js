function findFactorial() {
    let n = document.getElementById("num").value;
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact *= i;
    }

    document.getElementById("result").innerText =
        "Factorial = " + fact;
}
