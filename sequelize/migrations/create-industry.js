"use strict";
const { DataTypes } = require('sequelize')
const tableName = "Industry";
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
      industryCode: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      industry: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      industryDescription: {
        type: DataTypes.STRING(descriptLen),
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(tableName);
  },
};
