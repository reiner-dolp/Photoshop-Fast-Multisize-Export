;!function(resizer) {
    
    resizer._processor = resizer._processor ? resizer._processor : {};

    resizer._processor["at1x"] = function(doc, width, options, allOptions) {
        if(doc.width.value < width) {
            displayError("Unable to resize image to " + width + "px width. Image to small!");
            return;
        }

        doc.resizeImage(new UnitValue(width, 'px'));
        
        options.atx = 1;
    }

    resizer._processor["at2x"] = function(doc, width, options, allOptions) {
        
        if(doc.width.value < width) {
            displayError("Unable to resize image to " + width + "px width at doubled resolution. Image to small!");
            return;
        }

        doc.resizeImage(new UnitValue(width * 2, 'px'));
        
        options.atx = 2;
        options.width = width;
        options.height = doc.height / 2;
        
        if(!options.jpeg) {
            options.jpeg = { quality: 0 };
        } else {
            options.jpeg.quality = 0;
        }
        
    }

}((function() {
    if(!$.global.hasOwnProperty('resizer'))
        $.global.resizer = {};
    
    return $.global.resizer;
})());