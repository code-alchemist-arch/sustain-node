"use strict";
const { DataTypes } = require('sequelize')
const tableName = "Disclosure";
const descriptLen = 10240;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(tableName, {
      sectorCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      languageId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      disclosureTopicCode: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      disclosureTopic: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      disclosureTopicDescription: {
        type: DataTypes.STRING(descriptLen),
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(tableName);
  },
};
