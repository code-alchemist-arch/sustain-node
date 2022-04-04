const sequelize = require('sequelize')
const Disclosure = require("../../sequelize/models/disclosure");
const Sustainability = require("../../sequelize/models/sustainability");
const Sector = require("../../sequelize/models/sector");


class DisclosureController {
    async get (req, res) {
        try{
            const langId = req.params.languageId;
            const data = await Disclosure.findAll({
                where: {languageId: langId},
                attributes: [
                    ["disclosureTopicCode", "code"],
                    ["disclosureTopic", "name"],
                    ["disclosureTopicDescription", "description"],
                    [sequelize.col("Sustainability.sustainabilityDimension"), "sustainability_dimension"],
                ],
                include: [{
                    model: Sustainability,
                    attributes: [],
                }]
            });
            return data;
        } catch (e) {
            throw new Error(e);
        }
    }
}

module.exports = new DisclosureController()