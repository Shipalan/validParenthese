function validParentheses(parens) {
    const stack = []
  
    for (let i = 0; i < parens.length; i++) {
      if (parens[i] === '(') {
        stack.push(parens[i])
      } else if (parens[i] === ')' && stack[stack.length - 1] === '(') {
        stack.pop()
      }
    }
  
    if (stack.length === 0) {
      return true
    }
    return false
  }
  
  console.log(validParentheses("(())"))
  console.log(validParentheses("("))