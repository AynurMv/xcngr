const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class RatingProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Product }) {
      // define association here
      this.belongsTo(Product, { foreignKey: 'product_id' });
    }
  }
  RatingProduct.init({
    product_id: DataTypes.INTEGER,
    user_buyer: DataTypes.INTEGER,
    grade: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'RatingProduct',
  });
  return RatingProduct;
};
