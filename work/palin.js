function isPalin(num) {
    if (num < 0 || (num % 10 == 0 && num !== 0)) {
        return false;
    }

    let rev = 0;
    let x = num;

    while (num > 0) {
        const rem = num % 10;
        rev = rev * 10 + rem;
        num = Math.floor(num / 10);
    }

    return x == rev;
}

const number = parseInt(prompt("Enter num:"));
if (isPalin(number)) {
    console.log(number + " is a palindrome.");
} else {
    console.log(number + " is not a palindrome.");
}

