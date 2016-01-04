var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var logSchema = new Schema({
/*
String
Number
Date
Buffer
Boolean
Mixed
ObjectId
Array

  int
    levelN
    dci
    sessionNum
    dciDM
    startingXP
    earnedXP
    totalXP
    startingGold
    deltaGold
    totalGold
    downtimeStarting
    downtimeChange
    downtimeTotal
    renownStarting
    renownEarned
    renownTotal
    magicNumStarting
    magicNumChange
    magicNumTotal

  text
    classN
    faction
    adventureName
    nameDM

  data
    currentDate

  textArea
    adventureNotes
    downtimeActivity
*/
});

var Log = mongoose.model('Log', logSchema);
module.exports = Log;
