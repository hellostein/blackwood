function makeClosures(arr, fn) {
    var result = new Array();
   for(let i=0;i<=arr.length;i++)
   {
    result[i]=function(n){
      return function(){
      fn(n)
    }}(arr[i])
   }
    return result;
  }
  let array = [1, 2, 3]
  let foo = (x) => {
    console.log(x)
  }
  let fun = makeClosures(array, foo)
  fun[1]() 