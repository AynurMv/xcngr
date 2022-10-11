const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProductPhoto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Product }) {
      // define association here
      this.belongsTo(Product, { foreignKey: 'product_id', onDelete: 'CASCADE' });
    }
  }
  ProductPhoto.init({
    photo: DataTypes.TEXT,
    product_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'ProductPhoto',
  });
  return ProductPhoto;
};
