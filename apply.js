Function.prototype.apply2 = function (context, args) {
  const fn = Symbol("fn");
  context = context || window;
  context[fn] = this;
  const result = context[fn](...args);
  delete context[fn];
  return result;
};

Function.prototype.myApply = function(context,args){
  context = context || window
  const fn = Symbol()
  const result = context[fn](...args)
  delete context[fn]
  return result
}