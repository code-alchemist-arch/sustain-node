const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../index");
const { textField } = require("../../utils/db");

const tableName = "Sustainability";

const fields = {
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
};

const options = {
  modelName: tableName,
  tableName: tableName,
  timestamps: false,
};

class Sustainability extends Model {
  static associate(models) {}
}

Sustainability.init(fields, { ...options, sequelize });
module.exports = Sustainability;
module.exports.fields = fields;
