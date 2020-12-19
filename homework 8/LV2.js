function sayInfo(age) {
    console.log("name:"+this.name)
    console.log("age:"+age)
  }
  var user = {
    name: "zzx"
  }
  Function.prototype.call2= function(context = window, ...args) {
    
    context.n = this
    const result = context.n(...args)
    
  delete context.n
    return result}
  sayInfo.call2(user,100)