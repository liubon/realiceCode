Function.prototype.bind2 = function (context, ...args) {
  const self = this;
  const fbound = function () {
    self.apply(
      this instanceof self ? this : context,
      args.concat(Arrary.prototype.slice.call(arguments))
    );
  };
  fbound.prototype = Object.create(self.prototype);
  return fbound;
};
