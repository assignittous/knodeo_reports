# knodeo_reports

A library for generating reports in HTML and PDF.

Reports are created using JADE.

Note that this library is still in early development and is subject to significant change.


# Use in your own project

`npm install knodeo-reports --save`

Coffeescript example:


```

# HTML

reports = require("knode-reports").reportGenerator

# generate an html report from a JADE file

jadeReport = reports.htmlReport.loadTemplate('path/to/jade.jade')

# compile to variable
html = reports.htmlReport..generate(jadeReport)

# compile to file
reports.htmlReport.generateFile "path/to/html.html", jadeReport

# PDF from a generated HTML file

reports.htmlToPdf "path/to/html.html", "path/to/pdf.pdf"



```