exports.learnVue = (function () {
  var learnVue = {
      submitInfo: function (app) {
          app.post('/POST/submitInfo', function (req, res) {
              console.log('name:' + req.body.name);
              res.send(req.body.name);
          });
      }
  };
  return learnVue;
}());