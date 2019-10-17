exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments();
    tbl
      .string("username", 64)
      .unique()
      .notNullable();
    tbl
      .string("password", 64)
      .unique()
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schemes.dropTableIfExists("users");
};
