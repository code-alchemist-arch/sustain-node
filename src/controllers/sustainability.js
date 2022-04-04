const Sustainability = require("../../sequelize/models/sustainability");

class SustainController {
    async get(req) {
        try{
            const langId = req.params.languageId;
            const data = await Sustainability.findAll({
                where: {languageId: langId},
                attributes: [["sustainabilityDimension", "name"]],
            });
            return data;
        } catch (e) {
            throw new Error(e);
        }
    }
}

module.exports = new SustainController()