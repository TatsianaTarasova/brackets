module.exports = function check(str, bracketsConfig) {
  // your solution
  let stack = []
  let a = 0;
  for(i = 0; i < str.length; i++){
    for(j = 0; j < bracketsConfig.length; j++){
      if(str[i] === bracketsConfig[j][0] && bracketsConfig[j][0] === bracketsConfig[j][1]){
       a += 1; 
      } else if(str[i] === bracketsConfig[j][0] && bracketsConfig[j][0] !== bracketsConfig[j][1]){
        stack.push(str[i]);
      } else if(str[i] === bracketsConfig[j][1]){
        if(stack.length === 0 || stack[stack.length - 1] !== bracketsConfig[j][0]){
          return false;
        }
        stack.pop();
      }
    }  
  }  
  return stack.length === 0 && a % 2 === 0; 
}
