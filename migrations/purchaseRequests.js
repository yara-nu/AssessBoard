exports.up = function(knex, Promise) {
    return Promise.all([
        // knex.schema.createTable('purchaseRequests', function(table) {
        //   table.increments("id").primary();
        //   table.boolean("ApprovedByAssess");
        //   table.boolean("ApprovedByBank");
        //   table.dateTime('ApprovalDate');
        //   table.boolean("RequestIsDone");
        //   table.dateTime('RequestDate');
        //
        //
        //   table.integer('AmountOfTokenRequested');
        //   table.integer('promotionCode');
        //
        //   table.integer('qoutas_id').unsigned().notNull().references('qoutas.id');
        //
        //   table.timestamps();
        // })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('purchaseRequests')
    ]);
};
