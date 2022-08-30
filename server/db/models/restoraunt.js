const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Restoraunt extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Restoraunt.init({
    name: DataTypes.STRING,
    body: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    user_id: DataTypes.INTEGER,
    img: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Restoraunt',
  });
  return Restoraunt;
};
