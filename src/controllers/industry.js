const Industry = require("../../sequelize/models/industry");

class IndustryController {
    async get (req, res) {
        try{
            const langId = req.params.languageId;
            const data = await Industry.findAll({
                where: {languageId: langId},
                attributes: [
                    ["industryCode", "code"],
                    ["industry", "name"],
                    ["industryDescription", "description"],
                    ["sectorCode", "sector_code"],
                ],
            });
            return data;
        } catch (e) {
            throw new Error(e);
        }
    }
}

module.exports = new IndustryController()