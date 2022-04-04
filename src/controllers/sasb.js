const fs = require('fs')
const Sector = require('../../sequelize/models/sector');
const Sustainability = require('../../sequelize/models/sustainability')
const Industry = require('../../sequelize/models/industry')
const Disclosure = require('../../sequelize/models/disclosure')
const {getXlsxSheetName, getXlsxContentBySheet} = require('../../utils/excel');

class SasbController {
  async import(req, res) {

    if (!req.params.languageId)
      throw new Error("No languageId param is detected");
    if (!req.files)
      throw new Error("No data imported");

    const file = req.files[Object.keys(req.files)[0]]; // accept only first one file (security filter)
    if (file.mimetype !== "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
      throw new Error("File Format Error");

    try {
      const fileName = getPrefixName().toString() + file.name;
      const dir = __dirname + "..\\..\\..\\upload";
      if (!fs.existsSync(dir)){
          fs.mkdirSync(dir);
      }
      file.mv('./upload/' + fileName);
      const filePath = dir + "\\" + fileName;
      const langId = req.params.languageId;
      CreateInitialTable(filePath, langId);
    } catch (e) {
       throw new Error(e);
    }
  }
}

const CreateInitialTable = async (path, langId) => {
  const sheetArray = await getXlsxSheetName(path);
  const sectorData = await getSectorData(path, sheetArray[1].name, langId);
  const industryData = await getIndustryData(path, sheetArray[2].name, langId);
  const disclosureData = await getDisclosureData(path, sheetArray[3].name, langId);
  const sustainData = await getSustainData(path, sheetArray[4].name, langId);
  Sector.bulkCreate(sectorData);
  Industry.bulkCreate(industryData);
  Disclosure.bulkCreate(disclosureData);
  Sustainability.bulkCreate(sustainData);
  fs.unlink(path, (err) => {
    if (err) {
        throw err;
    }
    console.log("SASB file was deleted.");
});
}

const getSectorData = async (path, sheetName, langId) => {
  let bin = await getXlsxContentBySheet(path, sheetName);
  let data = new Array();
  bin = bin.slice(1);
  data = bin.map((item) => ({ sectorCode: item[0], languageId: langId, sector: item[1] }));
  return data;
};

const getIndustryData = async (path, sheetName, langId) => {
  let bin = await getXlsxContentBySheet(path, sheetName);
  let data = new Array();
  bin = bin.slice(1);
  data = bin.map((item) => ({
    sectorCode: item[0],
    languageId: langId,
    industryCode: item[2],
    industry: item[3],
    industryDescription: item[4],
  }));
  return data;
};

const getDisclosureData = async (path, sheetName, langId) => {
  let bin = await getXlsxContentBySheet(path, sheetName);
  let data = new Array();
  bin = bin.slice(1);
  data = bin.map((item) => ({
    sectorCode: item[0],
    languageId: langId,
    disclosureTopicCode: item[4],
    disclosureTopic: item[5],
    disclosureTopicDescription: item[6],
  }));
  return data;
};

const getSustainData = async (path, sheetName, langId) => {
  let bin = await getXlsxContentBySheet(path, sheetName);
  let data = new Array();
  bin = bin.slice(1);
  data = bin.map((item) => ({
    sectorCode: item[0],
    languageId: langId,
    disclosureTopicCode: item[4],
    sustainabilityDimension: item[6],
  }));
  return data;
};

const getPrefixName = () => {
  let res = Date.now();
  return res;
};

module.exports = new SasbController();
