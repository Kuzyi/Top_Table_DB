require('dotenv').config()
module.exports = {
  development: {
    password: '1288',
    database: 'table_top_db_development',
    dialect: 'postgres'
  },
  test: {
    password: '1288',
    database: 'table_top_database_test"',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
