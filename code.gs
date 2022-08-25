// Login to AliceBlue website 
function weblogin(){
  alice.weblogin();
}

// Add trigger to call function weblogin() daily at 8:30am IST
function dailylogin(){
  alice.dailylogin();
}

// Clears Response on opening of sheet
function onOpen(e){
  var ss =  SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Sheet1");

  sheet.getRange("B15").clearContent();
  sheet.getRange("B25").clearContent();
}
