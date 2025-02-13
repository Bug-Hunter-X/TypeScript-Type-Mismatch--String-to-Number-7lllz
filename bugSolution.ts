function add(a: number, b: number): number {
  return a + b;
}

function isNumber(x: any): x is number {
  return typeof x === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    console.error('One or both inputs are not numbers.');
    return 0; // Or handle the error appropriately
  }
}

let result1 = addSafe(1, 2); 
let result2 = addSafe(1, "2"); // Will now handle the error gracefully

//Type Assertion (less safe):
let result3 = add(1, parseInt("2" as string) ); 