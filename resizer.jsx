#target photoshop

#include filenameformatter.jsx
#include ranges.jsx

#include processor-atx.jsx
#include filewriter-jpeg.jsx

/**
 * Exposes the variable `resizer` providing
 * a framework to automatically create and store
 * modifications of the original image.
 *
 * @author Reiner Dolp <hallo@reinerdolp.com>
 * @version 0.0.0-experimental
 */
;!function(ns, undefined) {

    if(!ns.hasOwnProperty('_preprocessor'))
        ns._preprocessor = {};
        
    if(!ns.hasOwnProperty('_processor'))
        ns._processor = {};
        
    if(!ns.hasOwnProperty('_filewriter'))
        ns._filewriter = {};
    
    /**
     * 
     * @param doc a _saved_ document.
     */
    ns.process = function(doc, opts) {
        ns._defaultDispDial = app.displayDialogs;
        
        var basePath = doc.path;
        var baseName = filenameformat.getBasename(doc.name);
        var filetype = filenameformat.getFiletype([doc.name, opts.fileformat]);
        
        var ranges = range.createFromString(opts.ranges);
        
        for (var i = 0, l = ranges.length; i < l; i++) {
            var itr = ranges[i].getIterator();
            
            while(itr.hasNextStep()) {
                var currentWidth = itr.getNextStep();
                var preprocessedDoc = doc.duplicate();
                
                for(var preprocessor in ns._preprocessor) {
                    preprocessor(preprocessedDoc, currentWidth, opts);
                }
                
                for(var opt in opts) {
                    if(ns._processor[opt] && opts[opt]) {
                        
                        var activeOptions = opts[opt];

                        if(Object.prototype.toString.call(activeOptions) !== '[object Object]') {
                             activeOptions = {};
                        }
                        
                        var dupdoc = preprocessedDoc.duplicate();
                        
                        ns._processor[opt](dupdoc, currentWidth, activeOptions, opts);
                        
                        var filename = filenameformat.getFilename(opts.fileformat, activeOptions, {
                                extension: filetype,
                                width: dupdoc.width.value,
                                height: dupdoc.height.value,
                                originalname: baseName
                            }, opts);
                        
                        ns._filewriter[filetype](dupdoc, basePath + "/" + filename, activeOptions, opts, opt);
                        
                        dupdoc.close(SaveOptions.DONOTSAVECHANGES);
                    }
                
                    
                }
            
                preprocessedDoc.close(SaveOptions.DONOTSAVECHANGES);
            }
        }
    
        app.displayDialogs = ns._defaultDispDial;
    }
        
        /*from += step;

        while((from -= step) >= to)
        {
            var dupdoc = docref.duplicate();
            app.activeDocument = dupdoc;

            dupdoc.resizeImage(new UnitValue(from * 2, 'px'));
            
            options.quality = 0;

            dupdoc.saveAs(new File(path2 + '/' + from + '@2x.jpg'), options);

            dupdoc.close(SaveOptions.DONOTSAVECHANGES);

            var dupdoc2 = docref.duplicate();
            app.activeDocument = dupdoc2;

            dupdoc2.resizeImage(new UnitValue(from, 'px'));
            
            options.quality = 8;
            dupdoc2.saveAs(new File(path2 + '/' + from + '@1x.jpg'), options);

            dupdoc2.close(SaveOptions.DONOTSAVECHANGES);
        }*/
}((function() {
    if(!$.global.hasOwnProperty('resizer'))
        $.global.resizer = {};
    
    return $.global.resizer;
})());
/*
var docref = app.activeDocument, dial = app.displayDialogs,
    from = 960,
    to = 710,
    step = 50;
    
app.displayDialogs = DialogModes.NO;

if(docref.width.value < (from * 2))
	alert('image to small');
else if(from < to || step < 1)
	alert('invalid settings.')
else
{
}

app.displayDialogs = dial;*/