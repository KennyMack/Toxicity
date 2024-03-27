const PublicGoogleSheetsParser = require('public-google-sheets-parser');
const spreadsheetId = '1u1_8ND_BY1DaGaQdu0ZRZPebrOaTJekE9hyw_7BAlzw';
const parser = new PublicGoogleSheetsParser(spreadsheetId);
const fs = require('fs');

const companies = [];
parser.parse()
  .then(data => {
    fs.writeFile(`toxicity_${new Date().toISOString()}.json`, JSON.stringify(data), file => {
      console.log(file);
    });
  })