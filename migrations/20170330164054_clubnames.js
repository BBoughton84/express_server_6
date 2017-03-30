
exports.up = function(knex) {
    return knex.schema.createTable('clubs', c => {
      c.increments('id')
      c.string('brand')
      c.string('type')
      c.integer('number')
    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('clubs')
}
