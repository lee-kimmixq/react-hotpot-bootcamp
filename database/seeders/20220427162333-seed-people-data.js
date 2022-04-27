module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('people', [{
      name: 'blossom',
      amount: 23.45,
      bill_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'bubbles',
      amount: 40.00,
      bill_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'buttercup',
      amount: 60.00,
      bill_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('people', null);
  },
};
