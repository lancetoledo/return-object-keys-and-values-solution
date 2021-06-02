// Create a function that takes an object and returns the keys and values as separate arrays.
// Return the keys sorted alphabetically, and their corresponding values in the same order

const keysAndValues = obj => {
  //Write code here
  var k = [];
  var o = [];
  for (var i in obj){
    k.push(i);
    o.push(obj[i]);
  }
  return [k,o];
};



// Example 1:
// Input: keysAndValues({ a: 1, b: 2, c: 3 })
// Output: [["a", "b", "c"], [1, 2, 3]]

// Example 2:
// Input: keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// Output: [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

// Example 3:
// Input: keysAndValues({ key1: true, key2: false, key3: undefined })
// Output: [["key1", "key2", "key3"], [true, false, undefined]]



