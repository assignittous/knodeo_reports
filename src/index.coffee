# index.coffee

exports.reportGenerator =
  htmlToPdf: require("./lib/html-to-pdf").html-to-pdf
  htmlReport: require("./lib/report").htmlReport