export const field = [
  [
    '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 
  ], [
   '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 
 ], [
   '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 
 ], [
   '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 
 ], [
   '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 
 ], [
   '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 
 ], [
   '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 
 ], [
   '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 
 ], [
   '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 
 ], [
   '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 
 ]
]


const validate = (arr) => {
  if(arr.reduce((a, v) => a+v).match(/1/gi)){
    return arr.reduce((a, v) => a+v).match(/1/gi).length
  } else {
    return 0
  }
}

export const fillField = (arr) => {
  var i = 10;
  while(validate(field) < 20){
    arr[Math.round(Math.random() * 9)][Math.round(Math.random() * 9)] = '1'
    i--  
  }
  return arr
}

