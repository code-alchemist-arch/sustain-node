const IndustryController = require("../../controllers/industry");
const { defaultGetHandler } = require("../../handlers/default");

const setup = (router) => {
  router.get("/industries/:languageId?", defaultGetHandler(IndustryController));
};

module.exports = setup;
