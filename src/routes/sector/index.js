const SectorController = require("../../controllers/sector");
const { defaultGetHandler } = require("../../handlers/default");

const setup = (router) => {
  router.get("/sectors/:languageId?", defaultGetHandler(SectorController));
};

module.exports = setup;
