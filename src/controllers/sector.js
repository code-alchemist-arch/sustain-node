const Sector = require("../../sequelize/models/sector");

class SectorController {
    async get (req, res) {
      try {
        const langId = req.params.languageId;
        const data = await Sector.findAll({
            where: {languageId: langId},
            attributes: [
              ["sectorCode", "code"],
              ["sector", "name"],
            ],
          });
          return data;
      } catch (e) {
        throw new Error(e);
      }
        
    }
}

module.exports = new SectorController()