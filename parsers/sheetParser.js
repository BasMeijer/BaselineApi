let XLSX = require('xlsx');


exports.parseSheet = function () {
    let workbook = XLSX.readFile('data/sheets/PBDATA.xlsx');
    let sheet_name_list = workbook.SheetNames;
    return XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]])
}