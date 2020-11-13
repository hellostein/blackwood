//LV0
const person = {
    name: 'Boson',
    age: 20,
    address: {
      city: 'Chongqing',
      area: 'Nanan'
    }
  }
  let {name, age, address:{city,area}} = person
  //LV1
  function fib(n){
  let n1= 1, n2= 1;
  for(let i=2;i<n;i++){
      [n1,n2]=[n2,n1+n2]
  }
  return n2
  }
  //LV2
  function add(){
      let le=arguments.length
      let o=0
      for(let p=0;p<le;p++){
          if(!isNaN(arguments[p])) {
              o+=Number(arguments [p])
      }
  }return o
  }
  