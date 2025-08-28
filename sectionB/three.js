


const generateFactorial = (n) => {

    let n = document.getElementById('factorialInput').value;
    
    if (!n) {
        throw new Error("Please provide a number")
    }

    if (n === 0 || n === 1) {
        return 1
    }

    for (let i = n - 1; i >= 1; i--) {
        n *= i
    }
    return n
}

console.log(generateFactorial(4))