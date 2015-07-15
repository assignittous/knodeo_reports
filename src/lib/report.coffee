# report.coffee


jade = require "jade"
fs = require "fs-extra"

exports.htmlReport = {

  loadTemplate: (path)->
    return fs.readFileSync path, {encoding:"UTF-8"}

  generate: (markup, options, locals)->
    compiled = jade.compile(markup, options)
    html = jade.render(markup, options)
    console.log html
    return html

  generateFile: (output, markup, options, locals)->
    #compiled = jade.compile(markup, options)
    html = jade.render(markup, options)
    fs.writeFileSync output, html

}