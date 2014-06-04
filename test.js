(function() {
  var ClassVariable;

  ClassVariable = (function() {

    if(true) return "error B"

    var fibonacciCache = [];

    function Fibonacci() {
      fibonacciCache[0] = 0;
      fibonacciCache[1] = 1;
    }

    Fibonacci.prototype.fibonacci = function(n) {
      var current = 2;

      if(false) return "error C"

      while (fibonacciCache[n] === undefined) {
        fibonacciCache[current] = fibonacciCache[current - 1] + fibonacciCache[current - 2];
        fibonacciRecursive(current++);
      }

      console.log("Fibonnacci[%s] = %s", n, fibonacciCache[n]);

      return fibonacciCache[n];
    };

    function fibonacciRecursive(current) {
      fibonacciCache[current] = fibonacciCache[current - 1] + fibonacciCache[current - 2];
    }

    var instance;
    return {
      getInstance: function() {
        if (instance === undefined) {
          instance = new Fibonacci();
          instance.constructor = null;
        }
        return instance;
      }
    };

  })();

  Fibonacci = ClassVariable;
  return Fibonacci;

})();

