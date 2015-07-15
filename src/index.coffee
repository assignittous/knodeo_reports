# index.coffee

exports.reportGenerator =
  htmlToPdf: require("./lib/html-to-pdf").htmlToPdf
  htmlReport: require("./lib/report").htmlReport