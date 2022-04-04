const SasbController = require("../../controllers/sasb");
const { importHandler } = require("../../handlers/default");

const setup = (router) => {
  router.post("/sasb/import/:languageId?", importHandler(SasbController));
};

module.exports = setup;
