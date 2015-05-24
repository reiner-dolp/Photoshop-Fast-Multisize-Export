/**
 * Provides a facility to internationalize the script.
 *
 * @author Reiner Dolp
 * @version 0.0.0-experimental
 */
var TRANSLATIONS = {
    en: {
        TOOLNAME: "Fast Multisize Export Tool for Web Developers",
        READING_DIRECTION: "left",
        FILENAME_FORMAT: "Filename Format:",
        DEFAULT_FILENAME: "{width}@{@x}x.{extension}",
        LIST_PLACEHOLDERS: "Available placeholders are: {width} {height} {originalname} {@x} {extension}",
        WIDTHS_NEEDED: "Widths needed:",
        WIDTHS_FORMAT: "List of {starting value} to {end value} steps {pixels removed from width per step}. \rWords and other non numeric symbols are stripped. The order matters.",
        AT_1X: "Generate @1x version of each image.",
        AT_2X: "Generate @2x version of each image.",
        OK: "OK",
        CANCEL: "Cancel",
        NO_ACTIVE_DOCUMENT: "No document open to resize!",
        DOCUMENT_NOT_SAVED: "Save the document first!"
    },

    /*de: {
        TOOLNAME: "Werkzeug zum schnelle Export in verschiedenen Bildgrößen",
        READING_DIRECTION: "left",
        FILENAME_FORMAT: "Format eines Dateinamens:",
        DEFAULT_FILENAME: "{width}@{atX}x.{extension}",
        LIST_PLACEHOLDERS: "Verfügbare Platzhalter sind: {width} {height} {originalname} {atX} {extension}",
        WIDTHS_NEEDED: "Benötigte Bildbreiten:",
        WIDTHS_FORMAT: "List of {starting value} to {end value} steps {pixels removed from width per step}. \rWords and other non numeric symbols are stripped. The order matters.",
        AT_1X: "Erzeuge @1x version jedes Bildes.",
        AT_2X: "Erzeuge @2x version jedes Bildes.",
        OK: "Generieren",
        CANCEL: "Abbrechen",
        NO_ACTIVE_DOCUMENT: "Kein Dokument geöffnet!",
        DOCUMENT_NOT_SAVED: "Speichern Sie das aktuelle Dokument!"
    }*/
};

var LANG = TRANSLATIONS[app.locale.substring(0, 2).toLowerCase()] || TRANSLATIONS.en;