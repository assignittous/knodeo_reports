var phantom;

phantom = require("phantom");

exports.htmlToPdf = {
  generate: function(url, output, options) {
    return phantom.create(function(ph) {
      return ph.createPage(function(page) {
        var paperSize;
        paperSize = {
          format: "Letter",
          orientation: 'landscape',
          margin: '1cm'
        };
        return page.open(url, function(status) {
          if (status !== 'success') {
            console.log('Unable to load the address!');
          } else {
            return page.evaluate(function() {
              return window.setTimeout(function() {
                return true;
              }, 200);
            }, function(result) {
              console.log("done");
              console.log(output);
              console.log(page.paperSize);
              console.log('Result ' + result);
              page.set("paperSize", paperSize);
              page.render(output);
              return ph.exit();
            });
          }
        });
      });
    });
  }
};
