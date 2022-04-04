const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../index");
const { textField } = require("../../utils/db");

const tableName = "Disclosure";
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
};

const options = {
  modelName: tableName,
  tableName: tableName,
  timestamps: false,
};

class Disclosure extends Model {
  static associate(models) {
    this.belongsTo(models.Sustainability, {foreignKey: "languageId", targetKey:'languageId'});
    this.belongsTo(models.Sustainability, {foreignKey: "disclosureTopicCode", targetKey:"disclosureTopicCode"})
  }
}

Disclosure.init(fields, { ...options, sequelize });
module.exports = Disclosure;
module.exports.fields = fields;
