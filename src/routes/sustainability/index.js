const SustainController = require("../../controllers/sustainability");
const { defaultGetHandler } = require("../../handlers/default");

const setup = (router) => {
  router.get("/sustainability-dimensions/:languageId?", defaultGetHandler(SustainController));
};

module.exports = setup;
