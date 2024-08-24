const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Create extends Model {}

Create.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'create',
  }
);

module.exports = Create;