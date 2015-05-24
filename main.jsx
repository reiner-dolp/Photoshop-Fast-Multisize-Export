#target photoshop

#include resizer.jsx
#include ui.jsx

if(!app.activeDocument) { // BUG: crashes? why?
    gui.displayError("no_active_document");
} else if(!app.activeDocument.path) {
    gui.displayError("document_not_saved");
} else {
    // this file links the gui and the actual resizer script
    gui.showOptions(function(ok) {
        gui.hideOptions();
        
        if(ok) {
            resizer.process(app.activeDocument, gui.getOptions());
        }
    });
}