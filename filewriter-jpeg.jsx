;!function(resizer) {
    
    resizer._filewriter = resizer._filewriter ? resizer._filewriter : {};

    resizer._filewriter["jpeg"] = resizer._filewriter["jpg"] = (function() {
        
        var defaultOptions = new JPEGSaveOptions();
        defaultOptions.formatOptions = FormatOptions.PROGRESSIVE;
        defaultOptions.scans = 3;
        
        function mergeWithDefaultOptions(opts) {
            if(!opts) {
                return defaultOptions;
            }
        
            var newOpts = new JPEGSaveOptions();
            
            for (var attrname in defaultOptions) {
                if(defaultOptions.hasOwnProperty(attrname)) {
                    newOpts[attrname] = defaultOptions[attrname];
                }
            }
        
            for (var attrname in opts) {
                if(opts.hasOwnProperty(attrname)) {
                    newOpts[attrname] = opts[attrname];
                }
            }
            
            return newOpts;
        }
        
        return function(doc, path, activeOptions, allOpts, opt) {
            //doc.saveAs(new File(path), mergeWithDefaultOptions(opts));
            if(activeOptions["jpeg"] && activeOptions["jpeg"].quality) {
                defaultOptions.quality = activeOptions["jpeg"].quality;
            } else if(activeOptions["jpg"] && activeOptions["jpg"].quality) {
                defaultOptions.quality = activeOptions["jpg"].quality;
            } else {
                defaultOptions.quality = 8;
            }
        
            if(opt == "at2x") {
                defaultOptions.quality = 0;
            }
        
            doc.saveAs(new File(path), defaultOptions);
        };
    })();

}((function() {
    if(!$.global.hasOwnProperty('resizer'))
        $.global.resizer = {};
    
    return $.global.resizer;
})());