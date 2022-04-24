module.exports = {
  development: {
    username: 'kimmilee',
    password: null,
    database: 'hotpot_development',
    host: '127.0.0.1',
    dialect: 'postgres',
    seederStorage: 'sequelize',
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: { // https://github.com/sequelize/sequelize/issues/12083
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
