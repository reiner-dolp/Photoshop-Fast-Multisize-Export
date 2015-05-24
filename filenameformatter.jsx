filenameformat = {
    getFilename: function(fileformat, activeOptions, addtionalOptions, allOptions) {
        return fileformat.replace(/\{([^}]+)\}/g, function(withParantheses, withoutPars) {
            withoutPars = withoutPars.toLowerCase();
            return activeOptions[withoutPars] || addtionalOptions[withoutPars] || allOptions[withoutPars];
        });
    },

    getFiletype: function(lookupArray) {
        for(var i = 0, l = lookupArray.length, res = null; i < l; ++i) {
            var extension = /(?:\.([^.]+))?$/.exec(lookupArray[i])[1];
            
            if(extension != undefined) {
                return extension;
            }
        }
        
        return "";
    },

    getBasename: function(nameWithExtension) {
        return /^([^.]+)/.exec(nameWithExtension)[1];
    }
}