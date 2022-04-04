const xlsxFile = require("read-excel-file/node");

// get content
const getXlsxContent = (fileName) => {
  try {
    const sheets = xlsxFile(fileName);
    return sheets;
  } catch (e) {
    throw new Error(e);
  }
};

// get sheet name
const getXlsxSheetName = async (fileName) => {
  try {
    const sheets = await xlsxFile(fileName, { getSheets: true });
    return sheets;
  } catch (e) {
    throw new Error(e);
  }
};

// get data from sheet
const getXlsxContentBySheet = async (fileName, sheetName) => {
  try {
    const sheets = xlsxFile(fileName, { sheet: sheetName });
    return sheets;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = { getXlsxContent, getXlsxContentBySheet, getXlsxSheetName };
