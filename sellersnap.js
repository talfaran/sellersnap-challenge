const fs = require('fs')
const csv = require("fast-csv");
const stream = fs.createReadStream("users.csv");
const wrtiestream = fs.createWriteStream("arangedusers.csv")
const headers = require('./headerClass')
const rows = require('./csvBodyClass')
var usersData = [];
var dataInCorrectOrder = [];
var badRows = [];

 
csv
.fromStream(stream, {headers : false})
// take all the data from the csv file and put it inside the userData array
 .on("data", function(data){
     usersData.push(data);
 })
 .on("end", function(){

    for (let i = 0; i < usersData.length; i++) {
        //looping to find the headers and rearanged them to the correct order
        if(i === 0){
          var headersInfo = headers.headersArangment(usersData[i])
          dataInCorrectOrder[i] = headersInfo.arangedHeaders            
        } else {
            //looping over the rows, and manipulate them according to criteria
          let rowInfo  = rows.rowArangment(usersData[i],headersInfo.originHeadersPositions)
          rowInfo.rowStatus === false? badRows.push(rowInfo.row) : dataInCorrectOrder.push(rowInfo)
        }
    }
    console.log(badRows)
    console.log(dataInCorrectOrder)
    csv.write(dataInCorrectOrder).pipe(wrtiestream);
     
 });

