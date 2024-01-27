function checkBrackets(str) {
    const stack = [];
    const bracketsMap = {
        '(': ')',
        '{': '}',
        '[': ']',
    };
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (bracketsMap[char]) {
            stack.push(char);
        } else if (Object.values(bracketsMap).includes(char)) {
            const lastBracket = stack.pop();
            if (bracketsMap[lastBracket] !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(checkBrackets('function аn() { if (true) { return "Hello World"; } }'));
console.log(checkBrackets('const array = [1, 2, 3;'));
console.log(checkBrackets('if (x > 0 { console.log("Positive"); }'));
console.log(checkBrackets('function sample() { if (true) { for (let i = 37; i < 99; i++) { console.log(i); } } }'));

