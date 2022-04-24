module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('bills', [{
      total: 123.45,
      name: 'jan 1 new year hotpot',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      total: 678.90,
      name: 'feb 2 cny hotpot',
      created_at: new Date(),
      updated_at: new Date(),
    }]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('bills', null);
  },
};
