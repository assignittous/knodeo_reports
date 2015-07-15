var fs, jade;

jade = require("jade");

fs = require("fs-extra");

exports.htmlReport = {
  loadTemplate: function(path) {
    return fs.readFileSync(path, {
      encoding: "UTF-8"
    });
  },
  generate: function(markup, options, locals) {
    var compiled, html;
    compiled = jade.compile(markup, options);
    html = jade.render(markup, options);
    console.log(html);
    return html;
  },
  generateFile: function(output, markup, options, locals) {
    var html;
    html = jade.render(markup, options);
    return fs.writeFileSync(output, html);
  }
};
