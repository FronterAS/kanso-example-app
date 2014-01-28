var tap = require('tap');

tap.test('The Couch greet loads', function (t) {
  t.doesNotThrow(load_greet, 'No problem loading the greet.js file')
  t.end()

  function load_greet() {
    var greet = require('../lib/greet');
  }
});

tap.test('The show function', function (t) {
  var greet = require('../lib/greet'),
      sayHello = greet.shows.sayHello;

  t.type(sayHello, 'function', 'Show function "sayHello" in the couch app');

  var doc = {},
      null_req = {'query':{}},
      john_req = {'query':{'who':'John Doe'}};

  t.equal(sayHello(doc, null_req), 'Hello, world', '"Hello world" by default');
  t.equal(sayHello(doc, john_req), 'Hello, John Doe', 'Supports ?who query string');
  t.end();
});
