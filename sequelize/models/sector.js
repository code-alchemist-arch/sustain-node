const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../index");

const tableName = "Sector";

const fields = {
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
};

const options = {
  modelName: tableName,
  tableName: tableName,
  timestamps: false,
};

class Sector extends Model {
  static associate(models) {}
}

Sector.init(fields, { ...options, sequelize });
module.exports = Sector;
module.exports.fields = fields;
