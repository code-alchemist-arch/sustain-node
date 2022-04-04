const DisclosureController = require("../../controllers/disclosure");
const { defaultGetHandler } = require("../../handlers/default");

const setup = (router) => {
  router.get("/disclosure-topics/:languageId?", defaultGetHandler(DisclosureController));
};

module.exports = setup;
