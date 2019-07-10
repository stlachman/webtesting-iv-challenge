exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments();

    tbl.string("name", 255).notNullable();
  });
};

exports.down = function(knex, Promise) {
  // undo the previous operation in up
  return knex.schema.dropTableIfExists("users");
};
