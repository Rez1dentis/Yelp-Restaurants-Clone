module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Restoraunts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      body: {
        type: Sequelize.TEXT,
      },
      rating: {
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.BOOLEAN,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Users',
          },
          key: 'id',
        },
      },
      img: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Restoraunts');
  },
};
