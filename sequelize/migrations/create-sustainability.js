"use strict";
const { DataTypes } = require('sequelize')
const tableName = "Sustainability";

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
      sustainabilityDimension: {
        type: DataTypes.STRING(10240),
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(tableName);
  },
};
