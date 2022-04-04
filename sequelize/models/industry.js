const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../index");
const { textField } = require("../../utils/db");

const tableName = "Industry";
const descriptLen = 10240;

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
};

const options = {
  modelName: tableName,
  tableName: tableName,
  timestamps: false,
};

class Industry extends Model {
  static associate(models) {}
}

Industry.init(fields, { ...options, sequelize });
module.exports = Industry;
module.exports.fields = fields;
