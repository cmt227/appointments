// VARS

// The spreadsheet associated with this app.
var ss = SpreadsheetApp.openById("1ioGq9sh4EdYnqR-pQREwThEmG02c3AdZgNHXY4n6tZA");
// Some importand sheets.
var log = ss.getSheetByName("Log");
var debug = ss.getSheetByName("Debug");

// HELPERS

function myLog(row) {
  debug.appendRow(row);
  var ri = debug.getLastRow();
  return debug.getRange(ri, 1, 1, debug.getMaxColumns());
}

function log_err(row) {
  var range = myLog(row);
  range.setBackground('#ff0000');
}

function log_ok(row) {
  var range = myLog(row);
  range.setBackground('#00ff00');
}

function test() {
  log_ok(['hi mom!']);
  log_err(['oops :(']);
}
