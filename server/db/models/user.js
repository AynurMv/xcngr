const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Rating, Product, Coment, Favorit,
    }) {
      this.hasMany(Rating, { foreignKey: 'seler' });
      this.hasMany(Product, { foreignKey: 'user_id' });
      this.hasMany(Coment, { foreignKey: 'user_id' });
      this.hasMany(Favorit, { foreignKey: 'user_id' });
    }
  }
  User.init({
    f_name: DataTypes.STRING,
    l_name: DataTypes.STRING,
    password: DataTypes.TEXT,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    photo: DataTypes.TEXT,
    telegram: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
