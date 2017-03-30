// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/day6'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE
  }

}
