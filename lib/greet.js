exports.shows = {
    'sayHello' : function (doc, req) {
      var who = req.query.who || 'world';
      return 'Hello, ' + who;
    }
};
