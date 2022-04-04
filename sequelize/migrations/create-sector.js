"use strict";
const { DataTypes } = require('sequelize')
const tableName = "Sector";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(tableName, {
      sectorCode: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      languageId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      sector: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(tableName);
  },
};
