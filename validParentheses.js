function validParentheses(parens) {
  const stack = []

  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === '(') {
      stack.push(parens[i])
    } else if (parens[i] === ')' && stack[stack.length - 1] === '(' && stack.length !== 0) {
      stack.pop()
    } else {
      stack.push(parens[i])
    }
  }

  if (stack.length === 0) {
    return true
  }
  return false
}
  
  console.log(validParentheses("(())"))
  console.log(validParentheses("("))


//* A simpler solution submitted by another user */

// function validParentheses(parens){
//   var n = 0;
//   for (var i = 0; i < parens.length; i++) {
//     if (parens[i] == '(') n++;
//     if (parens[i] == ')') n--;
//     if (n < 0) return false;
//   }
  
//   return n == 0;
// }