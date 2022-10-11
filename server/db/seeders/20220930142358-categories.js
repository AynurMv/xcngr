/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert(
      'Categories',
      [
        {
          name: 'Инструменты',
          photo: 'tool.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Женская одежда',
          photo: 'collection-of-girl.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Мужская одежда',
          photo: 'collection-of-men',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Хобби и отдых',
          photo: 'hobbi-and-otdih.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Оборудование',
          photo: 'oborudovanie.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Профессиональное оборудование',
          photo: 'pro-electronic.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Инструменты для дачи',
          photo: 'tools-for-dacha.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Для животных',
          photo: 'for-animal.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
