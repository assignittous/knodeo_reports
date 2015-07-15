# html-to-pdf.coffee

# phantom.coffee

phantom = require "phantom"

exports.htmlToPdf = {

  generate: (url, output, options)->
    phantom.create (ph)->
      ph.createPage (page)->

        paperSize = 
          format: "Letter"
          orientation: 'portrait'
          margin: '1cm'

        page.open url, (status)->
          if status != 'success'
            console.log 'Unable to load the address!'
            return
          else     
            page.evaluate () -> 
              window.setTimeout ()->
                return true
              , 200
            , (result) ->
              #console.log "done"
              #console.log output

              #console.log page.paperSize
              #console.log 'Result ' + result
              page.set "paperSize", paperSize


              page.render output
              ph.exit()    

}
