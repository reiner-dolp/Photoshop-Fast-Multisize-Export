#include ui-lang.jsx

/**
 * Renders the graphical user interface of the script.
 *
 * @author Reiner Dolp
 * @version 0.0.0-experimental
 */
;!function(ns, undefined) {
    
    ns.displayError = function(errorMessage) {
        alert(LANG[errorMessage.toUpperCase()] || errorMessage);
    }
    
    ns.showOptions = function showOptions(cb) {
        
        if(!ns._options) {
            var window;
            
            ns._options = window = createWindow(LANG.TOOLNAME);
            
            window._g1 = createGroup(window);
            window._g1._label = createText(window._g1, LANG.FILENAME_FORMAT);
            window._g1._input = createInput(window._g1, LANG.DEFAULT_FILENAME);
            window._g1._desc = createSmallText(window._g1, LANG.LIST_PLACEHOLDERS);
            
            window._g2 = createGroup(window);
            window._g2._label = createText(window._g2, LANG.WIDTHS_NEEDED);
            window._g2._input = createMultilineInput(window._g2);
            window._g2._desc = createSmallText(window._g2, LANG.WIDTHS_FORMAT);
            
            window._g3 = createPanel(window, "Options");
            window._g3._at1x = createCheckbox(window._g3, LANG.AT_1X);
            window._g3._at2x = createCheckbox(window._g3, LANG.AT_2X);
            window._g3._at1x.value = true;
            
            createOKCancel(window);
        }
        
        window._gOK._ok.onClick = function() {
            cb(true);
        };
    
        window._gOK._no.onClick = function() {
            cb(false);
        }
        
        ns._options.show();      
    }

    ns.hideOptions = function() {
        if(ns._options) {
            ns._options.hide();
        }
    }

    ns.getOptions = function() {
        if(!ns._options) {
            return {};
        }
    
        return {
            fileformat: ns._options._g1._input.text,
            ranges: ns._options._g2._input.text,
            at1x: ns._options._g3._at1x.value,
            at2x: ns._options._g3._at2x.value
        };
    }

    function createWindow(name) {
        var window = new Window ("dialog", name);
        window.alignChildren = LANG.READING_DIRECTION;
        return window;
    }

    function createGroup(parent) {
        var group = parent.add("group");
        group.orientation = "column";
        group.alignChildren = LANG.READING_DIRECTION;
        return group;
    }

    function createPanel(parent, name) {
        var panel = parent.add("panel", undefined, name);
        return panel;
    }

    function createInput(parent, text) {
        var text = parent.add("edittext", undefined, text);
        text.characters = 80;
        return text;
    }

    function createMultilineInput(parent, text) {
        var text = parent.add("edittext", undefined, text, {multiline: true});
        text.characters = 80;
        return text;
    }

    function createText(parent, text) {
        var text = parent.add ("statictext", undefined , text, {multiline: true});
        text.characters = 80;
        return text;
    }

    function createSmallText(parent, text) {
        var text = parent.add ("statictext", undefined, text, {multiline: true});
        text.characters = 80;
        text.graphics.font = "dialog:10";
        return text;
    }

    function createCheckbox(parent, text) {
        var chk = parent.add ("checkbox", undefined, text); 
        return chk;
    }

    function createOKCancel(parent) {
        parent._gOK = parent.add("group");
        parent._gOK.alignment = "right";
        parent._gOK._ok = parent._gOK.add("button", undefined, LANG.OK);
        parent._gOK._no = parent._gOK.add("button", undefined, LANG.CANCEL);
    }
}(gui = {});