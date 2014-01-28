module.exports = {
  'shows': {
    "hello" : function (doc, req) {
      return 'Hello, ' + req.query.who + '!';
    }
  }
};
