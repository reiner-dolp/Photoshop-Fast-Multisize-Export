;!function(range) {
    rangeType = function(opts) {
        this._opts = opts; // TODO: clone
    }

    range.createFromString = function(str) {
        var stringRanges = str.split(/[\n\r]/);
        var ranges = [];
        
        for(var i = 0, l = stringRanges.length; i < l; ++i) {
            var rangeDigits = stringRanges[i].match(/([1-9][0-9]*)/g);
            
            if(rangeDigits == null) { continue }
            
            ranges.push(new rangeType({
                from: +rangeDigits[0],
                to: +rangeDigits[1],
                stepwidth: rangeDigits[2] ? +rangeDigits[2] : 100,
                srcString: stringRanges[i],
                srcNumbers: rangeDigits
            }));
        }
    
        return ranges;
    }

    rangeType.prototype.getIterator = function() {
        return new rangeItr(this._opts);
    }

    var rangeItr = function(opts) {
        this._from = this._currPos = opts.from;
        this._to = opts.to;
        this._stepwidth = opts.stepwidth;
        this._currPos += this._stepwidth;
    }

    rangeItr.prototype.hasNextStep = function() {
        var hasNext = (this._currPos - this._stepwidth) >= this._to;
        return hasNext;
    }

    rangeItr.prototype.getNextStep = function() {
        return this.hasNextStep() ? this._currPos -= this._stepwidth : null;
    }

}((function() {
    if(!$.global.hasOwnProperty('range'))
        $.global.range = {};
    
    return $.global.range;
})());